const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
var connectDB = require('./config/mongoDB');

connectDB();
dotenv.config();

app.use('/categorie', require('./routers/categorie'));
app.use('/order', require('./routers/order'));
app.use('/product', require('./routers/product'));
app.use('/role', require('./routers/role'));
app.use('/user', require('./routers/user'));

// Middleware'ler
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(morgan('dev'));

// Örnek bir API endpoint
app.get('/', (req, res) => {
    res.send('Merhaba, Express Backend Çalışıyor!');

    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.send("Homepage");
});

app.listen(PORT, () => {
    console.log(`🚀 Sunucu ${PORT} portunda çalışıyor...`);
});