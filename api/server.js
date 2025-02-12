const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/mongoDB');
const PORT = process.env.PORT || 3000;

connectDB();

app.use('/categorie', require('./routers/categorie'));
app.use('/order', require('./routers/order'));
app.use('/product', require('./routers/product'));
app.use('/role', require('./routers/role'));
app.use('/user', require('./routers/user'));

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.send("Homepage");
});

app.listen(PORT, () => {
    console.log(`🚀 Sunucu ${PORT} portunda çalışıyor...`);
});