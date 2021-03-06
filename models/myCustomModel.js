import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const myCustomModelSchema = new Schema({
    name: {
        type: String,
    }
});

module.exports = mongoose.model('myCustomModel', myCustomModelSchema);