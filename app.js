const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const accountsRoutes = require('./routes/accountsRoutes');
app.use(accountsRoutes);
const transferRoutes = require('./routes/transferRoutes');
app.use(transferRoutes);

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});