"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Imports
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
//Middlware
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("HELLO FROM EXPRESS + TS!!!!");
});
app.get("/hi", (req, res) => {
    res.send("hello!");
});
app.listen(process.env.PORT || 8080, () => {
    console.log(`Currrently listening on PORT: ${process.env.PORT}`);
});
