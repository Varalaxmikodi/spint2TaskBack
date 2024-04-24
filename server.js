
const express = require('express');



const mongoose = require('mongoose');

const cors = require('cors')

const app = express();

const Restarent = require('./model')

const Restarents = require('./model')

const LoginUser = require('./login')



app.use(express.json())

app.use(cors());

app.use(
    express.urlencoded({ extended: true })
);

app.use(express.json());

mongoose.connect('mongodb+srv://anamenivaralaxmi123:varalaxmi123@cluster0.iantfmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(
    () => console.log('db connected!')


).catch(err => console.log(err))

app.get('/hi', (req, res) => {
    res.send(`<h1>Hello Varalxmi`)

})




//restarent post

app.post('/add-restarents', async (req, res) => {
    let cons = req.body;
    console.log(cons);
    const { restarentName, price, category, location, available, image } = cons
    try {
        const newDatas = new Restarents({ restarentName, price, category, location, available, image });
        await newDatas.save();
        res.status(201).json(newDatas)
    }
    catch (error) {
        console.log(error.message)
    }

});


//restarent get

app.get('/restarents', async (req, res) => {
    try {
        const allDatas = await Restarents.find();
        return res.json(allDatas);
    }
    catch (error) {
        console.log(error.message)
    }
});


//restarent delete


app.delete('/delete-restarent/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        await Restarent.findByIdAndDelete(id)
        return res.json(await Restarent.find())
    }
    catch (error) {
        console.log(error.message)
    }
});



//restarent get one user

app.get('/restarents/:id', async (req, res) => {
    try {
        const allData = await Restarents.findById(req.params.id)
        return res.json(allData);
    }
    catch (error) {
        console.log(error.message)
    }
});




//restarent update one user

app.put('/update-restarent/:id', async (req, res) => {
    let cons = req.body;
    console.log(cons)
    const { restarentName, price, category, location, available, image } = cons
    try {
        const updateData = await Restarents.findByIdAndUpdate(req.params.id,
            { restarentName, price, category, location, available, image }
        );
        res.json(updateData)
    }
    catch (error) {
        console.error(err.message);
        res.send(400).send('Server Error');
    }
});


//restarent put

app.put('/up/:id', async (req, res) => {
    express.response.send(req.body)

});



//login save

app.post('/login-users', async (req, res) => {
    let conn = req.body;
    console.log(conn);
    const { email, password } = conn
    try {
        const newDatas = new LoginUser({ email, password });
        await newDatas.save();
        res.status(201).json(newDatas)
    }
    catch (error) {
        console.log(error.message)
    }



});


//login get

app.get('/login', async (req, res) => {
    try {
        const alData = await LoginUser.find();
        return res.json(alData);

    }
    catch (error) {
        console.log(error.message)
    }
})



app.listen(4000, () => console.log('Server Running'));