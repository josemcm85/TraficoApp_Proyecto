const sql = require("./db.js");

// constructor
const Conductor = function(conductor) {
  this.nombre = conductor.nombre;
  this.velocidad = conductor.velocidad;
  this.fecha = conductor.fecha;
};

Conductor.create = (newConductor, result) => {
  sql.query("INSERT INTO conductor SET ?", newConductor, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("nuevo Conductor: ", { id: res.insertId, ...newConductor });
    result(null, { id: res.insertId, ...newConductor });
  });
};

Conductor.findById = (idconductor, result) => {
  sql.query(`SELECT * FROM conductor WHERE idconductor = ${idconductor}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Conductor: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "no_encontrado" }, null);
  });
};

Conductor.getAll = result => {
  sql.query("SELECT * FROM conductor", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Conductores: ", res);
    result(null, res);
  });
};

Conductor.updateById = (id, conductor, result) => {
  sql.query(
    "UPDATE conductor SET nombre = ?, velocidad = ?, fecha = ? WHERE idconductor = ?",
    [conductor.nombre, conductor.velocidad, conductor.fecha, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {

        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated conductor: ", { id: id, ...conductor });
      result(null, { id: id, ...conductor });
    }
  );
};

Conductor.remove = (id, result) => {
  sql.query("DELETE FROM conductor WHERE idconductor = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {

      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Conductor con id borrado: ", id);
    result(null, res);
  });
};

Conductor.removeAll = result => {
  sql.query("DELETE FROM conductor", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} conductor`);
    result(null, res);
  });
};

module.exports = Conductor;