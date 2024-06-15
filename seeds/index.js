const mongoose = require('mongoose');
const Campground = require("../models/campground");
const cities = require('./cities');
const { descriptors, places } = require('./seedHelpers');


mongoose.connect('mongodb://localhost:27017/yelp-camp')
    .then(() => console.log('Database Connected'))
    .catch(e => console.log('Connection Error', e))


const sample = arr => arr[Math.floor(Math.random() * arr.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const image = 'https://newhampshirestateparks-pl.static.reserveamerica.com/webphotos/originals/NH/pid270015/%7Bpht%7Ddry%20river%201%7Bpht%7D1481568854868.jpg'
        const camp = new Campground({
            author: '666b5a12fa20a83413efaa5c',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images:  [
                {
                  url: 'https://res.cloudinary.com/dgch27ot5/image/upload/v1717891898/YelpCamp/grlgf8zv1ubsbvtprtxm.jpg',
                  filename: 'YelpCamp/grlgf8zv1ubsbvtprtxm'
                }
              ],
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nam distinctio sit quae dolores obcaecati rem ipsa harum id alias! Facilis ut placeat non voluptatem, itaque nam fugit porro hic.',
            price,
            geometry: {
              type: 'Point',
              coordinates: [
                cities[random1000].longitude,
                cities[random1000].latitude
              ]
            }
            
        })
        await camp.save()
    }
    
}

seedDB().then(() => {
    mongoose.connection.close()
})