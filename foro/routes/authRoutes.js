const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  try {

    function validarEntradaAlfanumerica(entrada) {
      const regex = /^[a-zA-Z0-9]*$/;
      return entrada.match(regex);
    }

    function validarEmail(entrada) {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return entrada.match(regex);
    }

    if (!validarEntradaAlfanumerica(req.body.username) || !validarEmail(req.body.email) || !validarEntradaAlfanumerica(req.body.password)) {
        return res.status(400).json({ error: "Las entradas contienen caracteres inválidos." });
    }

    const existingUserByUsername = await User.findOne({username: req.body.username});
    const existingUserByEmail = await User.findOne({email: req.body.email});

    if(existingUserByUsername) {
      return res.status(400).json({ error: "El nombre de usuario ya está en uso." });
    }

    if(existingUserByEmail) {
      return res.status(400).json({ error: "El correo electrónico ya está en uso." });
    }   

    const user = new User(req.body);
    await user.save();

    res.status(201).json({ username: user.username, email: user.email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ error: "Usuario no existente." });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return res.status(400).json({ error: "Contraseña incorrecta." });
    }

    const userId = user._id;

    res.json({ message: "Inicio de sesión exitoso", userId: userId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports.router = router;