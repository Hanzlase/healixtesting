const express = require('express');
const path = require('path');
const calculatorRouter = require('./routes/calculator');

nst ap = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes
app.use('/api', calculatorRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server only when not in test mode
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Calculator app running on http://localhost:${PORT}`);
  });
}

module.exports = app;
