const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(`
    <form action="/login" method="POST">
        <input name="username" type="text" placeholder="Usuario">
        <input name="password" type="password" placeholder="Contraseña">
        <input type="submit" value="Ingresar">
    </form>
    `);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if(username === 'admin' && password === 'admin') {
        res.send('Inicio de sesión exitoso');
    } else {
        res.send('Falló el inicio de sesión');
    }
});

app.listen(3000, () => console.log('El servidor está escuchando en puerto 3000.'));