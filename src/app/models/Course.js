const mongoose = require('mongoose');
// const slug = require('mongoose-slug-generator');
const slug = require('mongoose-slug-updater')

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    title: { type: String, require: true },
    desc: { type: String },
    image: { type: String },
    videoID: { type: String },
    slug: { type: String, slug: "title", unique: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);