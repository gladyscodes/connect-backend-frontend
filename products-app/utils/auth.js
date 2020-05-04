const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.verifyToken = (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, process.env.SECRET, (error, decoded) => {
    if(error) return res.status(401).json({ error });
    User.findById(decoded.id).then((user) => {
      req.user = user;
      next();
    });
  });
};

// checar si el usario tiene el role necesario para acceder a la ruta
exports.checkRole = (roles) => {
   return (req, res, next) => {
     const { role } = req.user;
      if(roles.includes(role)) {
        return next();
      } else {
        return res
          .status(403)
          .json( { msg: "You are not allowed to perform this action " })
      }
   }
}