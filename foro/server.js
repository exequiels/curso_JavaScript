const PORT = 3000;
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./models/user');
const Post = require('./models/post');
const authRoutes = require('./routes/authRoutes').router;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/loguearse', (req, res) => {
  res.render('loguearse'); 
});
app.get('/postear', (req, res) => {
  res.render('postear'); 
});
app.get('/posteos', (req, res) => {
  res.render('posteos');
});
app.get('/registrarse', (req, res) => {
  res.render('registrarse');
});

mongoose.connect('mongodb://127.0.0.1:27017/forum')
  .then(() => {
    console.log('Conexión a MongoDB exitosa');
  })
  .catch(error => {
    console.error('Error de conexión a MongoDB:', error);
  });

app.use(cors());
app.use(express.json());

app.post('/api/user', async (req, res) => {
  try {
    console.log("Request Body: ", req.body);
    var user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (err) {
    console.error("Error inside POST '/api/user': ", err.message);
  }
});

app.get('/api/posts', async (req, res) => {
  var posts = await Post.find().populate('postedBy').exec();
  res.send(posts);
});

app.post('/api/posts', async (req, res) => {
  console.log(req.body);
  var post = new Post({
    title: req.body.title,
    content: req.body.content,
    postedBy: req.body.postedBy
  });
  await post.save();

  res.send(post);
});

app.get('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('postedBy').exec();

    if (!post) {
      return res.redirect('/boceto_foro.html');
    }

    post.visitas += 1;
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

const replyRoutes = require('./routes/repliesRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/posts', replyRoutes);
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/`);
});