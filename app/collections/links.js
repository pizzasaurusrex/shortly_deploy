// NOTE: this file is not needed when using MongoDB
var db = require('../config');
var Link = require('../models/link');
// a comment
var Links = new db.Collection();
// another comment
Links.model = Link;

module.exports = Links;
