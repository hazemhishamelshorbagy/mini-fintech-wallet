const accountService = require("../services/accountsService");
const getWallets = (req, res) => {
  try {
    const wallets = accountService.getAllWallets();
    res.render("viewwallets", {
      title: "Wallets List",
      wallets,
      currentPath: req.path,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getWalletById = (req, res) => {
  try {
    const walletId = Number(req.params.id);
    const wallet = accountService.getWalletById(walletId);
    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }
    res.render("walletdetails", {
      title: "Wallet Details",
      wallet,
      currentPath: req.path,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCreateWalletPage = (req, res) => {
  res.render('createwallet', {
    title: 'Create Wallet',
    formData: {
      customerName: ''
    }
  });
};
const createWallet = (req, res) => {

  try {

    const customerName = req.body.customerName?.trim();

    if (!customerName) {
      return res.status(400).render('createwallet', {
        title: 'Create Wallet',
        error: 'Customer name is required'
      });
    }

    accountService.createWallet({
      customerName
    });

    res.redirect('/viewwallets');

  } catch (error) {

    res.status(500).send(error.message);

  }
};



module.exports = { getWallets, getWalletById, createWallet, getCreateWalletPage };
