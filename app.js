const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
//Connection to mongoose
mongoose.connect('mongodb+srv://root:root@cluster0.025ka.mongodb.net/?retryWrites=true&w=majority',
    {   dbName:'hackathon',
        useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

const userRoutes = require ('./routes/user');
const commentRoutes = require ('./routes/comment');
const companyRoutes = require ('./routes/company');
const authRoutes = require ('./routes/auth');
const missionRoutes = require ('./routes/mission');
const eventRoutes= require ('./routes/event');
const meetRoutes= require ('./routes/meet');

app.use('/api/user',userRoutes);
app.use('/api/comment',commentRoutes);
app.use('/api/company',companyRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/mission',missionRoutes);
app.use('/api/event',eventRoutes);
app.use('/api/meet',meetRoutes);

module.exports = app;