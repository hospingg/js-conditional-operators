// Завдання на if

// Task 1
// Задане значення isDay (true - зараз день, false - зараз ніч).
// Вивести напис 
// "Світла тема", якщо зараз день, 
// "Темна тема", якщо зараз ніч.

let isDay = true;
if(isDay){
    console.log('Світла тема')
}
else{
    console.log('Темна тема')
}
// Task 2
// Відомо, чи користувач онлайн (isOnline).
// Якщо користувач НЕ онлайн, то вивести попередження "Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет"

let isOnline = false;
if(!isOnline){
    console.log("Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет")
}

// Task 3
// Користувач вводить суму покупки.
// Обчислити та вивести остаточну суму покупки з урахуванням знижки.
// Знижка 3% надається, якщо сума покупки більша за 500 грн., а знижка 5% - якщо сума покупки більша за 800 грн.

// debugger
let sum = Number(prompt("Будь ласка, введіть суму покупки:"))
// if(sum >= 500){
//     console.log(`Вам надана знижка 3%!\nЗагальна ціна товару: ${sum * 0.97}`)
// }
// if(sum >= 800){
//     console.log(`Вам надана знижка 5%!\nЗагальна ціна товару: ${sum * 0.95}`)
// }
// або
let discount = 0;
if(sum && sum >= 500){
    sum >= 800 ? discount = 5 : discount = 3
    console.log(`Вам надана знижка ${discount}%. Загальна ціна товару: ${sum * (100 - discount) / 100}`)
}

// Task 4
// Задане значення змінної isLogin (залогінився користувач чи ні).
// Сформувати header наступним чином:
// зліва - логотип (зображення на ваш смак). Класично лого є посиланням на головну сторінку.
// справа - або кнопки Login та Register (якщо користувач не залогінився)
//                 або фото і ім'я користувача (якщо користувач залогінився)
// додатково застилізувати фото користувача: за значанням isMale для чоловіка зробити синю рамку, для жінки червону, при незаданому значенні isMale - сіру.

let isLogin = false;
let iconColor;
let isMale;
let sex;

function userRegister(){
    if (isLogin){
        alert('Ви вже залогінені')
    }
    else{
        sex = prompt("Будь ласка, вкажіть стать, написавши 'M' aбо 'F' ")
    switch(sex){
        case 'M':
            iconColor = '♂'
            break;
        case 'F':
            iconColor = '♀'
            break;
        default:
            iconColor = '?'
            break;
    }
    isLogin = true;
    return alert('Вітаємо з успішною реєстрацією!')
    }
}

function userLogin(){
    if(!isLogin){
        alert('Ви не зареєствровані. будь ласка, зареєструйтесь')
    }
    else{
        console.log(`Кабінет користвувача\nІконка:${iconColor}`)
    }
}
// Виклики функцій
userRegister()
userLogin()


// Завдання на switch..case
// Познайомитись з оператором множинного вибору
// switch..case

// 1. Запитати у користувача номер дня тижня та вивести відповідну повну рядкову назву (наприклад, якщо користувач вводить 7 – виводиться повідомлення "неділя"). 
// Передбачити обробку помилкового введення номера дня тижня (в гілка default, з повідомленням "дня з таким номером не існує").

let number = Number(prompt('Будь ласка, введіть номер дня тижня'))
switch (number){
    case 1:
        number = "Понеділок"
        break;
    case 2:
        number = "Вівторок"
        break;
    case 3:
        number = "Середа"
        break;
    case 4:
        number = "Четвер"
        break;
    case 5:
        number = "П'ятниця"
        break;
    case 6:
        number = "Субота"
        break;
    case 7:
        number = "Неділя"
        break;
    default:
        number = "дня з таким номером не існує"
        break;
}
console.log(`День: ${number}` )

// 2. У змінній day лежить якесь число з інтервалу від 1 до 31. 
// Визначте, до якої декади місяця потрапляє це число (до першої, другої чи третьої). Наприклад, число 1 - це перша декада, 20 - друга, 25 - третя.

let day = Number(prompt('Будь ласка, введіть число місяця'))
let decade;
switch(day){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        decade = 'Перша'
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
        decade = 'Друга'
        break;
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
        decade = 'Третя'
        break;
    default:
        decade = 'Неіснуюча'
        break;
}
console.log(`${decade} декада`)