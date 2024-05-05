import express from "express";
import  ConnectToMongo from"./config/db.js"
import router  from "./Endpoints/assistantRouter.js";
const app = express();
const PORT =9000;

ConnectToMongo();
app.use(express.json());
app.use(router);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
app.get('/', function(req, res) {
    res.send('Api is running');
});




