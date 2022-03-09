/**
 * Finally, we will test your wit and angineering mindset.
 */

// You have a bunch of bank accounts:
// Bank of America, with 500 EUR,
// Bank of Tirana, with 1000 EUR,
// Bank of England, with 69 EUR,
// HSBC with 100 EUR,
// Bank of Italy with 200 EUR.

// You want to keep track of your money. To do that:
// 1. Store all the information in the most appropriate JS data structure you can think of.
// Note: You may want to add a unique identifier to each account.

let banks = [{
        id: 1,
        name: "Bank of America",
        amountIn: 500
    },
    {
        id: 2,
        name: "Bank of Tirana",
        amountIn: 1000
    },
    {
        id: 3,
        name: "Bank of England",
        amountIn: 69
    },
    {
        id: 4,
        name: "HSBC",
        amountIn: 100
    },
    {
        id: 5,
        name: "Bank of Italy",
        amountIn: 200
    }
]

// Now, without directly typing the data:
// 2. Find a way to find out how much money is in a selected account.
// For example let's find how much money are in Bank of Italy
banks.find(bank => bank.name === "Bank of Italy").amountIn

// 3. Find a way to find out how much money you have in total.
banks.map(bank => bank.amountIn).reduce((a, b) => a + b, 0)
// 4. Find a way to add money to a selected account.
banks.find(bank => bank.name === "Bank of England").amountIn + 350
// 4.1 And subtract too.
banks.find(bank => bank.name === "Bank of Tirana").amountIn - 400
// 5. Each bank account has an account number. For this exercise, an account number is a 5 digit integer.
// Find a way to add that information into the existing shape.