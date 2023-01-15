const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        required: true,
        default: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/088c07107656487.5fabfb5406ec2.png'
    }, 
    author: {
        type: String,
        required: true,
        default: '63ab6bdb81312e580a7f7355'
    },
    content: {
        type: Object,
        required: true,
    }
});
articleSchema.plugin(uniqueValidator);

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;