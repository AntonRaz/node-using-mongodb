import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {String, require: true},
    description: String,
    category: String,
    price: Number,
    created_date: {Date, default: Date.now}
});