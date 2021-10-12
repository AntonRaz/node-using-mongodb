import mongoose from 'mongoose';
import productSchema from 'models.js';

const productModel = new mongoose.model('Product', productSchema);