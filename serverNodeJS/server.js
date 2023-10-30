const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola, Express!');
});
app.get("/products", (req,res) => {
  const products = [
  {
    id: 1,
    name: "hammer",
  },
  {
    id: 2,
    name: "screwdriver",
  },
  {
    id: 3,
    name: "wrench",
  },
 ];

 res.json(products);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/`);
});