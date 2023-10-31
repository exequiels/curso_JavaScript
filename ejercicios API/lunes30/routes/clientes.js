const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Lista de clientes");
});

router.get("/:id", function (req, res) {
  res.send("Información de un cliente");
});

module.exports = router;
