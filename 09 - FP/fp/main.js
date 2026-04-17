import { BankAccount } from "./modules/BankAccount.js";

const account1 = new BankAccount();
console.log(account1.getBalance());
account1.deposit(10000);
account1.withdraw(1);

console.log(account1.getBalance());


// FP bank account
const account = {
    name: 'savings',
    balance: 0
}

const withdraw = (account, amount) =>{
    const clone = {...account};
    
    if(clone.balance > amount) clone.balance -= amount;
    return clone;
}
const deposit = (account, amount) =>{
    const clone = {...account};
    
    if(amount>0) clone.balance += amount;
    return clone;
}

const newAccount = deposit(account, 1000);
console.log(account, newAccount)