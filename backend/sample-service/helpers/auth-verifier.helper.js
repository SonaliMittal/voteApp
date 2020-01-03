const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    let bearerToken = req.headers.authorization.split(' ');
    jwt.verify(bearerToken[1], process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            res.send("You are not authorized");
        } else {
            if ( decoded.resourceIds.includes(process.env.RESOURCE_ID) ) {
                next()
            } else {
                res.send("You are not authorized to access this API");
            }
        }
    });
  }