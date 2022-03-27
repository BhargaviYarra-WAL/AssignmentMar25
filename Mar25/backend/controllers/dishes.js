var connector = require("../poolconnect");
exports.createtable = (req, res) => {
  console.log(connector);
  const sql =
    "CREATE TABLE dishes (DishId int AUTO_INCREMENT PRIMARY KEY,name varchar(50),description varchar(100),price int,CategoryId int, FOREIGN KEY (CategoryId) REFERENCES category(CategoryId))";
  connector.query(sql, function (err, results, fields) {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
};
exports.addDishes = (req, res) => {
  const { name, description, price, CategoryId } = req.body;
  const sql = `INSERT INTO dishes (name,description,price,CategoryId) VALUES(?,?,?,?)`;
  connector.query(
    sql,
    [name, description, price, CategoryId],
    function (err, results, fields) {
      if (err) {
        res.json(err);
      } else {
        res.json(results);
      }
    }
  );
};
exports.selectAll = (req, res) => {
  const sql = `SELECT * FROM dishes`;
  connector.query(sql, function (err, results, fields) {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
};
exports.viewDish = (req, res) => {
  console.log();
  const sql = `SELECT * FROM dishes WHERE name = "${req.params.name}"`;
  connector.query(sql, function (err, results, fields) {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
};
exports.deleteDish = (req, res) => {
  console.log(req.params);
  const sql = `DELETE FROM dishes where DishId = "${parseInt(req.params.id)}"`;
  connector.query(sql, function (err, results, fields) {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
};
exports.deleteAll = (req, res) => {
  const sql = `DELETE FROM dishes`;
  connector.query(sql, function (err, results, fields) {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
};
exports.updateDishes = (req, res) => {
  const { name, description, price, CategoryId } = req.body;
  const sql = `UPDATE dishes SET name=?,description=?,price=?,CategoryId=? where DishId="${parseInt(
    req.params.id
  )}"`;
  connector.query(
    sql,
    [name, description, price, CategoryId],
    function (err, results, fields) {
      if (err) {
        res.json(err);
      } else {
        res.json(results);
      }
    }
  );
};
