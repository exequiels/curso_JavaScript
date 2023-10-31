const Item = require('../models/item_models');

module.exports = {
  getItems: async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (error) {
      console.error('Error al obtener los elementos:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  addItem: async (req, res) => {
    const { productName, description, price } = req.body;

    if (!productName || !description || !price) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const item = new Item({
      productName,
      description,
      price,
    });

    try {
      const newItem = await item.save();
      res.status(201).json(newItem);
    } catch (error) {
      console.error('Error al agregar el elemento:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },
};
