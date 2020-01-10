const express = require('express');
const voteController = require('../controllers/vote.controller');
const authVerifier= require('../helpers/auth-verifier.helper')
module.exports = (function () {
  var router = express.Router();

  router.get('/api/votes',authVerifier, voteController.getData);
  router.post('/api/votes', voteController.postData);
  router.post('/api/votescount/:id', voteController.voteCount);
  router.post('/api/login', voteController.logIn);
  router.post('/api/register', voteController.register);
  return router;
})();
