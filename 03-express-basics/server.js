// const value = require('./utils');
// console.log(value.logger());   //it returns 10
// console.log(value.myName);     //it returns Musthafa

// const { logger, myName } = require('./utils');  destructuring assignment
// console.log(logger());
// console.log(myName); it returns Musthafa

const express = require('express');
const app = express();
const path = require('path');

const Token = require('./middleware/token');
const validation = require('./middleware/validation');

const middleware = [Token , validation];
// const token = "123";


// app.get('/', (req, res) => {
//     res.json('Home');
// }); 

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,"views", 'index.html'));
// });


// app.get('/about', (req, res) => {
//     res.send('about');
// }); 

// app.get('/contact', (req, res) => {
//     res.sendFile(path.join(__dirname,"views", 'contact.html'));
// }); 


// app.get('*', (req, res) => {
//     res.status(404).send('<h1>404 - Page Not Found</h1>');
// });

// middleware
app.use(DateGenerator);  // this will be executed for every request  , its a middleware function

app.get('/', (req, res) => {
    res.send("<h1>success</h1>")

});

app.get('/profile',middleware,(req, res) => {
    console.log('user logged...');
    res.send('<h1>profile</h1>');
});


function DateGenerator(req, res, next) {
    const date = new Date();
    console.log(date.toString());
    next();
}



const PORT = process.env.PORT || 3001; // if PORT is not defined in the environment, use 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}   ); // start the server and listen on the specified port