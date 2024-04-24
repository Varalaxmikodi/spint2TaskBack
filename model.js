const mongoose = require('mongoose');

//restarent schema

const layout = mongoose.Schema({
    restarentName: { type: String, },
    price: { type: String, },
    category: { type: String, },
    location: { type: String, },
    available: { type: String, },
    image: { type: String, }

})

module.exports = mongoose.model('Restarents', layout);




