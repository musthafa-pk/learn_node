const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('views'));

const emailDB = "abc@gmail.com";
const passwordDB = "1234";

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
if(email === emailDB && password === passwordDB){
    res.send("Login successful");}
    else{
        res.send("Login failed");
    }

});

const PORT = process.env.PORT || 3001; // if PORT is not defined in the environment, use 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});