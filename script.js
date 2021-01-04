'use strict'
let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let expenses = {},
    optionalExpenses = {},
    income = [],
    savings = false;

for (let i = 0; i < 2; i++) {
    let cause = prompt("Введите обязательную статью расходов в этом месяце"); 
    let price = prompt("Во сколько обойдется?");
    expenses.cause = price;
};

let appData = {
    money: money,
    time: time,
    expences: expenses,
    optionalExpenses: optionalExpenses,
    income: income,
    savings: savings
};

console.log(appData);
alert("Ваш бюджет на 1 день: " + money/30);
