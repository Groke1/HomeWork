let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", ""); // Преобразовываем в number
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) { // isNan(x) возвращает true, если x не число 
        money = +prompt("Ваш бюджет на месяц?", "");    
    };
};
start();

let appData = {
    budget: money,
    expences: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let cause = prompt("Введите обязательную статью расходов в этом месяце"); 
        let price = prompt("Во сколько обойдется?");
    
        if  ( (typeof(cause) === 'string') && (typeof(cause) != null) 
            && (typeof(price) != null) // Если нажата кнопка "отмена"
            && cause != '' && price != '' && cause.length < 50 /*Ограниченное кол-во символов*/ ) {
            appData.expences[cause] = price;
        }else{
            i--;
        };
    
    };
};
chooseExpenses();

function chooseOptExpenses() { // Расчет необязательных расходов
    for (let i = 1; i < 4; i++) {
        let expense = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = expense;
    }
};
chooseOptExpenses();

function detectDayBudget() { // Расчет дневного бюджета
    appData.moneyPerDay = (appData.budget / 30).toFixed() //Округление (возвращает string)
    alert("Ежедневный бюджет: " + appData.moneyPerDay + "руб.");
};
detectDayBudget();

function detectLevel() { // Расчет уровня достатка
    if (appData.moneyPerDay < 100){
        console.log("Минимальный уровень достатка!");
    } else if ((2000 >= appData.moneyPerDay) && (appData.moneyPerDay> 100)) {
        console.log("Средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка!");
    } else {
        console.log("Произошла ошибка...!");
    };
};
detectLevel();

function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        
        appData. monthIncome = (save/100/12*percent).toFixed();
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);    
    };
};
checkSavings();