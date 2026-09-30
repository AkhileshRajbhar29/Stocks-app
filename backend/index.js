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


app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
}));
app.use(cookieParser());

app.use(bodyParser.json());

const setAuthCookie = (res, userId) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: false, 
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
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
      
})


app.post("/newOrder", async(req,res)=>{
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    newOrder.save();

    res.send("Order Saved");
});

app.get("/allOrders", async(req, res)=>{
    try{
        let allOrders = await OrdersModel.find({});
        res.json(allOrders);
    }
    catch(err){
        console.error(err);
        res.status(500).send("Failed to fetch orders");
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

app.post("/auth/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ success: true });
});

app.listen(PORT, ()=>{
    console.log("App started");
    mongoose.connect(uri);
    console.log("DB Connected");
});