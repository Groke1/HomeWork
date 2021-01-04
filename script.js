let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    expences: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let cause = prompt("Введите обязательную статью расходов в этом месяце"); 
    let price = prompt("Во сколько обойдется?");

    if  ( (typeof(cause) === 'string') && (typeof(cause) != null) 
        && (typeof(price) === 'string') && (typeof(price) != null)
        && cause != '' && price != '' && cause.length < 50){
        appData.expences[cause] = price;
    };
};

appData.moneyPerDay = appData.moneyPerDay/30;

alert("Ваш бюджет на 1 день: " + moneyPerDay);

if (appData.moneyPerDay < 100){
    console.log("Минимальный уровень достатка");
} else if (2000 > appData.moneyPerDay > 100) {
    console.log("Средний уровень достатка")
}
