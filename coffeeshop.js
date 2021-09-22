class Customer {
    constructor() {
        this.transactions = [] //[10,100,50,10,5000]
        this.discountThreshold = 1000
    }
    addTransaction(amount) {
        this.transactions.push(amount)
    }
    getTotalSpent() {
        let sum = 0
        this.transactions.forEach(transaction => {
            sum += transaction
        })
        // for (let sum of this.transactions) {
        //     return sum
        // }
    }
    isEligibleForDiscount() {
        return this.getTotalSpent() >= this.discountThreshold
    }
}

const customer1 = new Customer()
customer1.addTransaction(10)
customer1.addTransaction(100)
customer1.addTransaction(50)
customer1.addTransaction(10)

console.log(customer1.isEligibleForDiscount())
console.log(customer1.getTotalSpent())

customer1.addTransaction(5000)
console.log(customer1.isEligibleForDiscount())
console.log(customer1.getTotalSpent())

