const Conductor = require("../models/conductor.modelo.js");


exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "No puede estar vacio!"
    });
  }


  const conductor = new Conductor({
    nombre: req.body.nombre,
    velocidad: req.body.velocidad,
    fecha: req.body.fecha
  });


  Conductor.create(conductor, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error creando conductor."
      });
    else res.send(data);
  });
};


exports.findAll = (req, res) => {
    Conductor.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "error obteniendo los conductores"
          });
        else res.send(data);
      });
  
};


exports.findOne = (req, res) => {
    Conductor.findById(req.params.idconductor, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `No encontrado id ${req.params.idconductor}.`
            });
          } else {
            res.status(500).send({
              message: "Error con id " + req.params.idconductor
            });
          }
        } else res.send(data);
      });
  
};


exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Vacio!"
        });
      }
    
      Conductor.updateById(
        req.params.idconductor,
        new Conductor(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `No encontrado id ${req.params.idconductor}.`
              });
            } else {
              res.status(500).send({
                message: "Error con id " + req.params.idconductor
              });
            }
          } else res.send(data);
        }
      );
};


exports.delete = (req, res) => {
    Conductor.remove(req.params.idconductor, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.idconductor}.`
            });
          } else {
            res.status(500).send({
              message: "no encontrado id " + req.params.idconductor
            });
          }
        } else res.send({ message: `conductor borrado!` });
      });
};


exports.deleteAll = (req, res) => {
    Conductor.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Error borrando conductores."
          });
        else res.send({ message: `Conductores borrados!` });
      });
};