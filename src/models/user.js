import mongoose from 'mongoose';

const Schema  = mongoose.Schema;


const UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email: {type: String, required: true},
    pass: {type: String, required: true},
    coordinates: {
        lat: Number,
        lng: Number
    },
    preferedShops: [{
        id: { type: Schema.ObjectId, ref: 'Shop' },
        date: { type: Date, default: Date.now() }
    }],
    dislikedShops: [{
        id: { type: Schema.ObjectId, ref: 'Shop' },
        date: { type: Date, default: Date.now() }
    }]
});


// Virtual for user's url
UserSchema.virtual('url').get(function(){
    return '/user/' + this._id;
});

const User = mongoose.model('User', UserSchema);

export default User;