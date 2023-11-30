const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const bookRoutes = require('./routes/bookRoute');
const PORT = process.env.PORT || 3000;


// const app = express();


// app.use(bodyParser.json());


// moongoose.connect('mongodb://localhost:27017')
// .then(()=>{
//     console.log('Connected to MongoDB')
// })
// .catch((error) =>{
//     console.log('error')
// })
// // Routes
// app.use('/', bookRoutes);

// // app.listen(3000, () => {
// //     console.log('Server is running on port 3000');
// //   });
try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Error starting the server: ${error.message}`);
  }