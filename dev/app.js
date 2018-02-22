import path from "path";
import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/build/bundle.js", (req, res) => {
    res.sendFile(path.join(process.cwd(), "build/bundle.js"));
});

app.get("*", (req, res) => { 
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
    console.log("Server online - Listening to port 3000");
});