var express = require("express");
const { body } = require("express-validator");
var router = express.Router();
const connector = require("../connect");
router.get("/createtable", function (req, res) {
  console.log(connector);
  const sql =
    "CREATE TABLE users(email varchar(100),password varchar(100),userinfo text,dob date)";
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});
router.post("/", function (req, res) {
  const { email, password, userinfo, dob } = req.body;
  const sql = `INSERT INTO users VALUES("${email}","${password}","${userinfo}","${dob}")`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});
router.get("/", function (req, res) {
  const sql = `SELECT * FROM users`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});
router.delete("/:email", function (req, res) {
  const sql = `DELETE  FROM users WHERE email = "${req.params.email}"`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});
router.put("/update/:email", function (req, res) {
  const sql = `UPDATE users SET email="${req.body.email}", password="${req.body.password}",userinfo="${req.body.userinfo}",dob="${req.body.dob}" WHERE email="${req.params.email}"`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});
router.delete("/", function (req, res) {
  const sql = `DELETE FROM users`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});
module.exports = router;
