const accounts = require('../data/accounts');

const getAllWallets = () => {
  return accounts;
};
const getWalletById=(walletId)=>{
  return accounts.find(wallet => wallet.id === walletId);
}
const createWallet = ({customerName}) => {
  // Implementation for creating a new wallet
  const newWallet = {
    id: accounts.length + 1,
    balance: 0,
    status: "ACTIVE",
    customerName
  };
  accounts.push(newWallet);
  return newWallet;
};
module.exports = { getAllWallets, getWalletById, createWallet };