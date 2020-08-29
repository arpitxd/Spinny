var express = require('express');
var router = express.Router();
const got = require("got")

async function getAnimme(query, page){
    try{
        let  url = `https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${page}`;
        const response = await got(url);
        return JSON.parse(response.body);
    } catch(err){
        console.log(err)
        return {
            results: [],
            last_page: 0
        };
    }
}
async function searchAnimme(req) {
    let q = req.query.q;
    let page = req.query.page || 1;
    let data = getAnimme(q, page);
    return data;
}

router.get('/', async function(req, res){ //search animme routing
    const data = await searchAnimme(req);
    res.json(data);
 });
 module.exports = router;