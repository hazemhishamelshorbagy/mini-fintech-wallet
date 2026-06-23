const accountService = require("../services/accountsService");
const getAccounts = (req, res) => {
  try {
    const accounts = accountService.getAllAccounts();
    res.render("accounts", {
      title: "Accounts List",
      accounts,
      currentPath: req.path,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAccountById = (req, res) => {
  try {
    const accountId = Number(req.params.id);
    const account = accountService.getAccountById(accountId);
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    res.render("accountsdetail", {
      title: "Account Details",
      account,
      currentPath: req.path,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getCreateAccountPage = (req, res) => {
  res.render('createAccount', {
    title: 'Create Account'
  });
};
const createAccount = (req, res) => {
  console.log('Creating a new account with data:', req.body);
  try {

    const customerName = req.body.customerName?.trim();

    if (!customerName) {
      return res.status(400).render('createAccount', {
        title: 'Create Account',
        error: 'Customer name is required'
      });
    }

    accountService.createAccount({
      customerName
    });

    res.redirect('/accounts');

  } catch (error) {

    res.status(500).send(error.message);

  }
};



module.exports = { getAccounts, getAccountById, createAccount, getCreateAccountPage };
