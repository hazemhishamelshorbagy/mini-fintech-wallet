const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});
app.get('/', (req, res) => {
  res.render('index', {
    title: 'FastPay'
  });
});
const accountsRoutes = require('./routes/accountsRoutes');
app.use(accountsRoutes);
const transferRoutes = require('./routes/transferRoutes');
app.use(transferRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});