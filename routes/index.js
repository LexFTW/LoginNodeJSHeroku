var express = require('express');
var router = express.Router();

const users = [
  {name : 'alexis.mengual', password : 'Contraseña'},
  {name : 'duson', password : '1234'},
  {name : 'emieza', password : '1234'}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login con NodeJS - Express' });
});

router.post('/', function(req, res){
  for (var i = 0; i < users.length; i++) {
    if(users[i]['name'] == req.body.username && users[i]['password'] == req.body.password){
      res.render('dashboard', {username : req.body.username});
      return;
    }
  }

  res.render('error', {title: 'Login con NodeJS - Express', message: 'Nombre de Usuario y/o Contraseña Incorrecto'});
  return;
});

router.get('/api/login/:user/:pass', function(req, res){
  for (var i = 0; i < users.length; i++) {
    if(users[i]['name'] == req.params.user && users[i]['password'] == req.params.pass){
      var msg = {"status" : "OK"};
      res.send(JSON.stringify(msg));
      return;
    }
  }
  var msg = {"status" : "ERROR"};
  res.send(JSON.stringify(msg));
});

module.exports = router;
