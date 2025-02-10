const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

dotenv.config(); // .env dosyasını yükle

const app = express();

// Middleware'ler
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Örnek bir API endpoint
app.get('/', (req, res) => {
    res.send('Merhaba, Express Backend Çalışıyor!');
});

// Sunucuyu başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Sunucu ${PORT} portunda çalışıyor...`);
});
