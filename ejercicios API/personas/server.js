const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('¡Hola, Express!');
});
app.get("/personas", (req,res) => {
  const personas = [
    {
        id: 1,
        código: "0001",
        nombre: "Jorge Luis Borges",
      },
      {
        id: 2,
        código: "0002",
        nombre: "Gabriel García Márquez",
      },
      {
        id: 3,
        código: "0003",
        nombre: "Julio Cortázar",
      },
      {
        id: 4,
        código: "0004",
        nombre: "Jorge Luis Borges",
      },
      {
        id: 5,
        código: "0005",
        nombre: "Isabel Allende",
      },
      {
        id: 6,
        código: "0006",
        nombre: "César Aira",
      },
      {
        id: 7,
        código: "0007",
        nombre: "Roberto Bolaño",
      },
      {
        id: 8,
        código: "0008",
        nombre: "Rafael Obligado",
      },
      {
        id: 9,
        código: "0009",
        nombre: "Ricardo Güiraldes",
      },
      {
        id: 10,
        código: "0010",
        nombre: "José Hernández",
      }
 ];

 res.json(personas);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/`);
});