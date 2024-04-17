const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./routes');
const cors = require('cors');

app.use(cors())
// Middleware
app.use(express.json());

// Routes
app.use('/', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
