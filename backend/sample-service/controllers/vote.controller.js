var Vote = require('../models/vote.model');
const Register = require('../models/register.model');
const jwt = require('jsonwebtoken');

exports.getData = async (req, res) => {
  Vote.find().then((documents) => {
    console.log("doc", documents);
    res.status(200).json({
      bMessage: 'posts fetched successfully',
      bVotes: documents
    });
  });
}

exports.postData = async (req, res) => {
  const vote = new Vote({
    name: req.body.name,
    state: req.body.state,
    about: req.body.about,
    voteCount: req.body.voteCount
  });
  console.log("====")
  console.log(vote);
  vote.save();
  res.status(201).json({
    message: "successfully",
  });
}

exports.voteCount = async (req, res) => {
  console.log("selected cardID" + req.params.id)
  Vote.findOne({ _id: req.params.id }).then((documents) => {
    const updatedVoteCount = documents.voteCount + 1
    console.log("======" + documents.voteCount);
    console.log("======" + updatedVoteCount);
    Vote.updateOne({ _id: req.params.id }, { voteCount: updatedVoteCount }).then((updatedVoteCount) => {
      console.log(updatedVoteCount);
      res.status(201).json({
        bMessage: 'voted accepted successfully'

      });
    })
  });
}
exports.login = async (req, res) => {
  const login = new Register({
    email: req.body.email,
    password: req.body.password
  });
  Register.findOne({ email: req.body.email }, (err, document) => {
    if (err) {
      console.log(err);

    }
    else
      if (!document) {
        res.status(401).send("Invalid Email");

      }
      else if (req.body.password != document.password) {
        res.status(401).send("Invalid password");
      }
      else {
        let token = jwt.sign({ id: document._id }, 'sercetkey')
        res.status(200).send({ token })
      }
  })
}
exports.register = async (req, res) => {
  const register = new Register({
    email: req.body.email,
    password: req.body.password
  });
  register.save((err, document) => {
    if (err) {
      console.log(err)
    }
    else {
      let token = jwt.sign({ id: document._id }, 'sercetkey')
      res.status(200).send({ token })
    }
  });
}