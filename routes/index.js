var express = require('express');
var router = express.Router();

/* GET start page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'START'
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { 
    title: 'HOME'
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'ABOUT ME'});
});

/* GET project page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { 
    title: 'PROJECTS'
  });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'CONTACT ME'
  });
});

module.exports = router;
