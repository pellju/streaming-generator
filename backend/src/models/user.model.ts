import mongoose from 'mongoose';

const url: string = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB}`;

mongoose.connect(url)
    .then(result => {
        console.log("Successfully connected to MongoDB!");
    }).catch((e) => {
        console.log("Error found!");
        console.log(e);
    })

const user = new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        registerdate: String,
        role: String
});

user.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('User', user);