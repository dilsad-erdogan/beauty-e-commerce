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

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(morgan('dev'));

app.use('/categorie', require('./routers/categorie'));
app.use('/order', require('./routers/order'));
app.use('/product', require('./routers/product'));
app.use('/service', require('./routers/service'));
app.use('/role', require('./routers/role'));
app.use('/user', require('./routers/user'));

// Random 6-digit code generation function
const generateGiftCode = () => {
    return Math.random().toString(36).substr(2, 6).toUpperCase();
};

// Email sending function
app.post("/send-gift-card", async (req, res) => {
    const { email, amount, quantity } = req.body;
    const giftCode = generateGiftCode();
  
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
            },
        });
  
        let mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Your Gift Card Code 🎁",
            text: `Thank you for your purchase!\n\nGift Card Amount: $${amount} x ${quantity}\nGift Code: ${giftCode}\n\nEnjoy your gift! 🎉`,
        };
  
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Gift card sent!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send email." });
    }
});

app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.send("Homepage");
});

app.listen(PORT, () => {
    console.log(`🚀 Sunucu ${PORT} portunda çalışıyor...`);
});