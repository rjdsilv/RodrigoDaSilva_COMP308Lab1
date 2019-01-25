process.env.NODE_ENV = process.node.NODE_END || 'development';
const configureExpress = require('./config/express');
const app = configureExpress();
app.listen(3000);
console.log('Server running on port 3000');
module.exports = app;