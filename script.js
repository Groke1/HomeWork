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
    savings: true,
    chooseExpenses: function () /*Создаем метод*/{
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
    }, 
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed() //Округление (возвращает string)
        alert("Ежедневный бюджет: " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100){
            console.log("Минимальный уровень достатка!");
        } else if ((2000 >= appData.moneyPerDay) && (appData.moneyPerDay> 100)) {
            console.log("Средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка...!");
        };
    },
    checkSavings: function() {
        if (appData.savings) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData. monthIncome = (save/100/12*percent).toFixed();
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);    
        };
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let expense = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = expense;
        };
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Пречислите через запятую)", "");
        if (!(isNaN(items)) || items == "" || items == null) {
            console.log("Некорректные данные!");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        };
       
        appData.income.forEach(function(item, i){
            alert("Способы доп. заработка: " + (i + 1) + " - " + item);     
        });
    }

};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}