var connector = require("../poolconnect");
exports.createtable = (req, res) => {
  console.log(connector);
  const sql =
    "CREATE TABLE category (CategoryId int AUTO_INCREMENT PRIMARY KEY,Name varchar(50),description varchar(100))";
  connector.query(sql, function (err, results, fields) {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
};
exports.addCategory = (req, res) => {
  const { Name, description } = req.body;
  console.log(req.body);
  const sql = `INSERT INTO category (Name,description) VALUES(?,?)`;
  connector.query(sql, [Name, description], function (err, results, fields) {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
};
exports.selectAll = (req, res) => {
  const sql = `SELECT * FROM category`;
  connector.query(sql, function (err, results, fields) {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
};
exports.viewCategory = (req, res) => {
  const sql = `SELECT * FROM category WHERE CategoryId = "${parseInt(
    req.params.id
  )}"`;
  connector.query(sql, function (err, results, fields) {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
};
exports.deleteCategory = (req, res) => {
  console.log(req.params);
  const sql = `DELETE FROM category where CategoryId = "${parseInt(
    req.params.id
  )}"`;
  connector.query(sql, function (err, results, fields) {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
};
exports.deleteAll = (req, res) => {
  const sql = `DELETE FROM category`;
  connector.query(sql, function (err, results, fields) {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
};
exports.updateCategory = (req, res) => {
  const { Name, description } = req.body;
  const sql = `UPDATE category SET Name=?,description=? where CategoryId="${parseInt(
    req.params.id
  )}"`;
  connector.query(sql, [Name, description], function (err, results, fields) {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
};
