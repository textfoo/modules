'use strict'; 

const axios = require('axios'); 
const cheerio = require('cheerio'); 
const config  = require('./config/liquimedia_endpoints.json'); 

function LiquimediaApi() {
    this.urlBase = 'https://liquipedia.net/';
    this.config = config;

    this.healthcheck = async function() {
        try {
            const url = `${liquimedia.healthcheck}`;
            const response = await axios.get(url, 
                config = {
                    headers = config.headers
                });
            return response; 
        }catch(error) { 
            return error; 
        }
    }

    this.qualifiers = async function (game) {
        try {
            const url = `${liquimedia.base}${liquimedia[game].url}`;
            const config = this.generateConfig(); 
            
        }catch(error) { 
            console.log(error);
        }
    }

    this.auth = async function() {
        try {

        }catch(error) {

        }
    }
}

module.exports = {
    LiquimediaApi : LiquimediaApi
}