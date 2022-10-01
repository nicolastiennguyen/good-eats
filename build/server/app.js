"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const axios_1 = __importDefault(require("axios"));
const { Client } = require('pg');
const client = new Client({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
});
connect();
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log('connected');
        }
        catch (e) {
            console.error(e);
        }
    });
}
// app.use(router)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET");
    next();
});
app.get("/yelp/:location/:limit", (req, res) => {
    axios_1.default
        .get(`https://api.yelp.com/v3/businesses/search`, {
        headers: {
            Authorization: `Bearer ${process.env.YELP_API_TOKEN}`,
        },
        params: {
            location: req.params.location,
            limit: req.params.limit
        }
    })
        .then(response => {
        res.send(response.data);
    })
        .catch(error => {
        console.log('error');
    });
});
app.get("/businesses", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield client.query("select * from businesses");
        res.json(results.rows);
    }
    catch (e) {
        console.log(e);
    }
}));
app.post("/businesses", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, image_url, url, rating, price, location } = req.body;
    try {
        yield client.query("INSERT INTO businesses VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (id) DO NOTHING", [id, name, image_url, url, rating, price, location]);
        console.log('inserted into database');
    }
    catch (e) {
        console.log(e);
    }
}));
let PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
