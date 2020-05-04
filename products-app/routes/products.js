const express = require("express");
const router = express.Router();
const Product = require("../models/Product")
const { verifyToken, checkRole } = require("../utils/auth")

router.get("/",verifyToken, checkRole(["ADMIN", "USER"]), (req, res) => {
 Product.find()
 .populate("seller", "email")
 .then((products) => {
   res.status(200).json({ results: products});
 })
 .catch((err) => res.status(400).json(err));
});

router.post("/", verifyToken, checkRole(["ADMIN"]), (req, res) => {
  const {_id} = req.user;
  Product.create({ ...req.body, seller: _id })
  .then((product) => {
    res.status(201).json({ results: product});
  })
  .catch((err) => res.status(400).json(err));
 });

module.exports = router;