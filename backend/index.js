require ("dotenv").config();
const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");
const bcrypt = require("bcrypt");
const { UsersModel } = require("./model/UsersModel");

const cors = require ("cors");


const{HoldingsModel} = require("./model/HoldingsModel");

const {PositionsModel} = require ("./model/PositionsModel"); 
const {OrdersModel} = require("./model/OrdersModel");

const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

  

const app = express();

app.set("trust proxy", 1);  

// app.use(cors({              
//     origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
//     credentials: true,
// }));

const allowedOrigins = [
    process.env.FRONTEND_URL,
    process.env.DASHBOARD_URL,
    "http://localhost:3000",
    "http://localhost:3001",
].filter(Boolean);

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));

app.use(cookieParser());    
app.use(bodyParser.json()); 


const setAuthCookie = (res, userId) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: isProd ? "none" : "lax",
        secure: isProd, 
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
};

const requireAuth = (req, res, next) => {
    try {
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
        req.userId = decoded.id; 
        next();
    } catch (err) {
        res.status(401).send("Please login first");
    }
};


app.get("/addPositions", (req,res)=>{
    let tempPositions = [
  {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
];

tempPositions.forEach((item)=>{
    let newPosition = new PositionsModel({
        product: item.product,
        name: item.name,
        qty: item.qty,
        avg: item.avg,
        price: item.price,
        net: item.net,
        day: item.day,
        isLoss: item.isLoss,
    })
    newPosition.save();
})
res.send("Done!");
})


app.get("/allHoldings", async(req, res)=>{
    let allHoldings = await(HoldingsModel.find({}));
    res.json(allHoldings);
   
});

app.get("/allPositions", async(req, res)=>{
    let allPositions = await(PositionsModel.find({}));
    res.json(allPositions);
      
});


app.post("/newOrder", requireAuth, async (req, res) => {
    try {
        const newOrder = new OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
            user: req.userId,
        });
        await newOrder.save();
        res.send("Order Saved");
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to save order");
    }
});

app.get("/allOrders", requireAuth, async (req, res) => {
    try {
        const allOrders = await OrdersModel.find({ user: req.userId, mode: "BUY" });
        res.json(allOrders);
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to fetch orders");
    }
});
 
app.post("/sellOrder/:id", requireAuth, async (req, res) => {
    try {
        const sellQty = Number(req.body.qty);
        if (!Number.isFinite(sellQty) || sellQty <= 0) {
            return res.status(400).send("Invalid quantity");
        }

        const order = await OrdersModel.findOneAndUpdate(
            { _id: req.params.id, user: req.userId, mode: "BUY", qty: { $gte: sellQty } },
            { $inc: { qty: -sellQty } },
            { new: true }
        );

        if (!order) {
            return res.status(400).send("Order not found or quantity too high");
        }

        if (order.qty <= 0) {
            await OrdersModel.deleteOne({ _id: order._id });
        }

        await OrdersModel.create({
            name: order.name,
            qty: sellQty,
            price: Number(req.body.price),
            mode: "SELL",
            user: req.userId,
        });

        res.send("Sold");

    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to sell");
    }
});


app.get("/soldOrders", requireAuth, async (req, res) => {
    try {
        const sold = await OrdersModel.find({ user: req.userId, mode: "SELL" });
        res.json(sold);
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to fetch sold orders");
    }
});



app.post("/signup", async (req, res) =>{
try{
    const {email,password} = req.body;

    const existingUser = await UsersModel.findOne({email});

    if(existingUser){
        return res.status(400).send("User already exists");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new UsersModel({
        email,
        password:hashedPassword,
    });
    await newUser.save();
    setAuthCookie(res, newUser._id);

    res.status(201).send("Signup successful");
} 
catch(err){
    console.error(err);
    res.status(500).send("Something went wrong");
}
});





app.post("/login", async(req, res)=>{
    try{
        const{email, password} = req.body;

        const user= await UsersModel.findOne({email});
        if(!user){
            return res.status(400).send("Invalid email or password");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).send("Invalid email or password");
        }
        
        setAuthCookie(res, user._id);
        res.status(200).send("Login Successful");
    }
    catch(err){
        console.error(err);
        res.status(500).send("Something went wrong");
    }
});



app.get("/auth/verify", (req, res) => {
    try {
        jwt.verify(req.cookies.token, process.env.JWT_SECRET);
        res.status(200).json({ loggedIn: true });
    } catch (err) {
        res.status(401).json({ loggedIn: false });
    }
});

app.get("/auth/me", requireAuth, async (req, res) => {
    try {
        const user = await UsersModel.findById(req.userId).select("email");
        if (!user) return res.status(404).send("User not found");
        res.json({ email: user.email });
    } catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong");
    }
});


app.post("/auth/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ success: true });
});

app.listen(PORT, ()=>{
    console.log("App started");
    mongoose.connect(uri);
    console.log("DB Connected");
});