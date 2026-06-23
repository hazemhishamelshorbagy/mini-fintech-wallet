const accounts = require('../data/accounts');

const getAllAccounts = () => {
  return accounts;
};
const getAccountById=(accountId)=>{
  return accounts.find(account => account.id === accountId);
}
const createAccount = ({customerName}) => {
  // Implementation for creating a new account
  const newAccount = {
    id: accounts.length + 1,
    balance: 0,
    status: "ACTIVE",
    customerName
  };
  accounts.push(newAccount);
  return newAccount;
};
module.exports = { getAllAccounts, getAccountById, createAccount };