const express = require('express');
const app = express();

// REQUIRED to read form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', require('./routes/ui'));
app.use('/save', require('./routes/save'));
app.use('/health', require('./routes/health'));
app.use('/version', require('./routes/version'));

const PORT = process.env.PORT || 3002;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 App running on port ${PORT}`);
});
