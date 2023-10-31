const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", function (req, res) { 
  res.send("Lista de productos");
});

// About page route.
router.get("/:id", function (req, res) {
  //res.send("Información de un producto");
  const productoId = req.params.id;
  res.render('producto', { title: 'Página producto individual', id: productoId, nombre: 'Televisor' });
});

module.exports = router;
