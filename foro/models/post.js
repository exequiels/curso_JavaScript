const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
    content: String,
    repliedBy: { type: Schema.Types.ObjectId, ref: 'User', autopopulate: true },
    date: { type: Date, default: Date.now }
});

const postSchema = new Schema({
    title: String,
    content: String,
    postedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now },
    visitas: { type: Number, default: 0 },
    respuestas: [replySchema]
});

postSchema.plugin(require('mongoose-autopopulate'));

const Post = mongoose.model('Post', postSchema);

module.exports = Post;