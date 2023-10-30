const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('¡Hola, Express!');
});
app.get("/libros", (req,res) => {
  const libros = [
    {
        id: 1,
        título: "Ficciones",
        autor: "Jorge Luis Borges",
        año: "1944"
      },
      {
        id: 2,
        título: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        año: "1967"
      },
      {
        id: 3,
        título: "Rayuela",
        autor: "Julio Cortázar",
        año: "1963"
      },
      {
        id: 4,
        título: "El Aleph",
        autor: "Jorge Luis Borges",
        año: "1949"
      },
      {
        id: 5,
        título: "La casa de los espíritus",
        autor: "Isabel Allende",
        año: "1982"
      },
      {
        id: 6,
        título: "Ficciones",
        autor: "César Aira",
        año: "2000"
      },
      {
        id: 7,
        título: "Los detectives salvajes",
        autor: "Roberto Bolaño",
        año: "1998"
      },
      {
        id: 8,
        título: "Santos Vega",
        autor: "Rafael Obligado",
        año: "1885"
      },
      {
        id: 9,
        título: "Don Segundo Sombra",
        autor: "Ricardo Güiraldes",
        año: "1926"
      },
      {
        id: 10,
        título: "Martín Fierro",
        autor: "José Hernández",
        año: "1872"
      },
 ];

 /*if (libros.length > 0) {
  res.json({ status: 'success', data: libros });
} else {
  res.status(404).json({ status: 'error', message: 'no pudimos procesar tu pedido.' });
}*/

 res.json(libros);
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/`);
});