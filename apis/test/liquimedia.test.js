const assert = require("assert"); 
const LiquimediaApi = require("../index").LiquimediaApi;

// before(() => {
    
// });

describe(`test to make sure we can initiate the class`, function() {
    it('attempts to initiate the class', function() {
        const test = new LiquimediaApi();
        const expect = 'https://liquipedia.net/'; 
        assert.equal(test.urlBase, expect);
    });

    it(`attempts to check the config file`, function() {
        const lm = new LiquimediaApi(); 
        const expect = 'https://liquipedia.net/'; 
        assert.equal(lm.config.base, expect);
    });
});

describe(`attempts to validate endpoints`, function() {
    it(`healthcheck`, async function() {
        const lm = new LiquimediaApi(); 
        const expect = "200"; 
        const response = await lm.healthcheck(); 
        assert.equal(response, expect);
    });
});