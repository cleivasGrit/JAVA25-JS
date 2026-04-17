export class BankAccount{
    #balance;
    #name;
    constructor(name){
        this.#name = name;
        this.#balance = 0;
    }
    getBalance(){
        return this.#balance;
    }
    deposit(amount){
        if(amount>0) this.#balance += amount;
    }
    withdraw(amount){
        if(amount < this.#balance) this.#balance -= amount;
    }
}