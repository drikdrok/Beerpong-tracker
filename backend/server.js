require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: ["http://localhost:8081", "https://jlog-frontend.herokuapp.com/"]
};

app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Beerpong tracker" });
});



const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const Db = process.env.MONGODB;
const client = new MongoClient(Db, {
    usenewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

function connectToMongoDB(callback) {
    client.connect(function (err, db) {
        if (db) {
            _db = db.db("stats");
            console.log("Successfully connected to MongoDB!");
        }
        return callback(err);
    });
}


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {

    connectToMongoDB(function (err) {
        if (err) console.error(err);
    });

    console.log(`Server is running on port ${PORT}.`);
});


app.get("/getStats", getStats);
app.post("/setStats", setStats);


function getStats(req, res){
    _db.collection("22/23").find({}).toArray(function (err, result) {
        if (err) throw err;
        res.status(200).json(result);
        //res.status(200).send(result);
    });
}

function setStats(req, res){
    let newStats = req.body.newStats;

    console.log("Set stats: ", newStats);

    _db.collection("22/23").updateOne({ _id: ObjectId(newStats._id) }, {
        $set: {
            cups: newStats.cups,
            sameCups: newStats.sameCups,
            islands: newStats.islands,
            redemptions: newStats.redemptions,
            finalCups: newStats.finalCups,
            bitchCups: newStats.phoneNumber,
            titties: newStats.titties,
            blows: newStats.blows,
            gamesPlayed: newStats.gamesPlayed,
            wins: newStats.wins,

        }
    });
    res.status(200).send();
}