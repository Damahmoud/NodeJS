const express = require('express'); 
const multer = require('multer');   
const path = require('path');      
const app = express(); 
//////////////////////////////////////////////////////

// Configure storage settings for Multer
const storage = multer.diskStorage({
    // Define where uploaded files will be stored
    destination: (req, file, func) => {
        func(null, 'Images'); // Store files in the 'Images' directory
    },
    // Define the naming convention for uploaded files
    filename: (req, file, func) => {
        func(null, Date.now() + path.extname(file.originalname)); // Name file with timestamp + original extension
    }
});

// Initialize the Multer middleware with the defined storage settings
const upload = multer({ storage: storage });

//////////////////////////////////////////////////////
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index'); 
});
app.post('/action', upload.single('pic'), (req, res) => {
    res.redirect('/');
});
app.listen('3000', () => { 
    console.log("online"); 
});
