const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./Route/ProductRoute');
const adminRoutes = require('./Route/AdminRoute');

const app = express();

// Enable CORS
app.use(cors());

// Whitelist of allowed origins
const whitelist = ['http://localhost:3000'];

// CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static images
app.use('/images', express.static('../pos-page/src/components/AdminSection'));

// Routes
app.use('/api/product', productRoutes);
app.use('/api/products', productRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admins', adminRoutes);

// Start the server
const PORT = 4000;
app.listen(PORT, function () {
  console.log(`Now listening for requests on: http://localhost:${PORT}`);
});
