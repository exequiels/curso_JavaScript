const PORT = 3000;
const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/item_routes');

const cors = require('cors');
const app = express();
app.use(cors());
app.set('view engine', 'ejs');
app.use('/api', itemRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/curso', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      console.log('Conexión a MongoDB exitosa');
   })
   .catch(error => {
      console.error('Error de conexión a MongoDB:', error);
   });

// Middleware para parsear JSON
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/`);
});
