const express =require ('express');
const app = express();
const productRoutes = require("./Route/ProductRoute");
const cors = require('cors');
app.use(cors());

const whitelist = ['http://localhost:3000']; // assuming front-end application is running on localhost port 3000

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }x
  }
}


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/product', productRoutes);
app.use('/api/products',productRoutes);

app.listen(4000 , function (){
    console.log('Now listening for requests on:http://localhost:4000');
});