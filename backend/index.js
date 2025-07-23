/*require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


// Models imported without destructuring assuming default export
const HoldingsModel = require("./models/HoldingsModel");
const PositionsModel = require("./models/PositionsModel");
const OrdersModel = require("./models/OrdersModel");

const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

/* Uncomment if you want to add sample holdings
app.get("/addHoldings", async (req, res) => {
    let tempHoldings = [
        {
            name: "BHARTIARTL",
            qty: 2,
            avg: 538.05,
            price: 541.15,
            net: "+0.58%",
            day: "+2.99%",
        },
        {
            name: "HDFCBANK",
            qty: 2,
            avg: 1383.4,
            price: 1522.35,
            net: "+10.04%",
            day: "+0.11%",
        },
        // Add the rest of your holdings here...
    ];

    for (const item of tempHoldings) {
        let newHolding = new HoldingsModel({
            name: item.name,
            qty: item.qty,
            avg: item.avg,
            price: item.price,
            net: item.net,
            day: item.day,
        });

        await newHolding.save(); // await for proper saving
    }

    res.send("done");
});


app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
}); 

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();

  res.send("Order saved!");
});

app.listen(PORT, () => {
    console.log("App started");
    mongoose.connect(uri)
        .then(() => console.log("DB connected"))
        .catch((err) => console.error("DB connection error:", err));
}); */
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer"); // ✅ Added

const HoldingsModel = require("./models/HoldingsModel");
const PositionsModel = require("./models/PositionsModel");
const OrdersModel = require("./models/OrdersModel");
const UserModel = require("./models/Usermodel");

const app = express();
const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

// ✅ Temporary OTP store (in-memory)
let otpStore = {};

// ✅ Send OTP via email
app.post("/send-otp", async (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ success: false, message: "Phone number required" });
  }

  const generatedOTP = Math.floor(100000 + Math.random() * 900000);
  otpStore[phone] = generatedOTP;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `StoxPro <${process.env.MAIL_USER}>`,
    to: phone,
    subject: "Your StoxPro OTP",
    html: `<p>Your OTP is: <b>${generatedOTP}</b></p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📩 OTP sent to ${phone}: ${generatedOTP}`);
    res.json({ success: true, message: "OTP sent successfully to email!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send OTP email" });
  }
});

// ✅ Verify OTP & Save user
app.post("/verify-otp", async (req, res) => {
  const { phone, otp } = req.body;

  if (otpStore[phone] && otpStore[phone] == otp) {
    delete otpStore[phone];

    let existingUser = await UserModel.findOne({ email: phone });
    if (!existingUser) {
      await new UserModel({ email: phone }).save();
    }

    res.json({ success: true, message: "OTP verified and user saved!" });
  } else {
    res.status(400).json({ success: false, message: "Invalid OTP" });
  }
});

// -----------------------------
//       API ROUTES
// -----------------------------

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).send("Error fetching holdings");
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).send("Error fetching positions");
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("Order saved!");
  } catch (err) {
    res.status(500).send("Error saving order");
  }
});

// -----------------------------
//     Serve frontend & admin
// -----------------------------
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.use("/admin", express.static(path.join(__dirname, "../dashboard/build")));
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "../dashboard/build/index.html"));
});

// -----------------------------
//     DB Connection & Server
// -----------------------------
mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ DB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err);
  });
