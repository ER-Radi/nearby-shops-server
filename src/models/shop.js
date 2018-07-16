import mongoose from 'mongoose';

const Schema  = mongoose.Schema;


const ShopSchema = new Schema({
    name: {type: String, required: true},
    picture: {type: String, required: true},
    email: {type: String, required: true},
    city: {type: String, required: true},
    location: {
        type: String,
        coordinates: [Number]
    }
});

// Virtual for shop's url
ShopSchema.virtual('url').get(function(){
    return '/shop/' + this._id;
});

const Shop = mongoose.model('Shop', ShopSchema);

export default Shop;