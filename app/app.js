
function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number: Please Provide a valid number";
    }

    const perTicketPrice = 120;
    const guardCost = 500;
    const staffCount = 8;
    const lunchCostPerPerson = 50;

    const totalIncome = ticketSale * perTicketPrice;
    const totalLunchCost = staffCount * lunchCostPerPerson;
    const totalExpense = totalLunchCost + guardCost;
    const remainingTotal = totalIncome - totalExpense;
    return remainingTotal;
}

function checkName(name) {
    if (typeof name !== "string") {
        return "invalid"
    }

    const goodLetters = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    const convertLowerCase = name.toLowerCase();
    const lastCharacter = convertLowerCase[convertLowerCase.length - 1];

    if (goodLetters.includes(lastCharacter)) {
        return "Good Name";
    }
    else {
        return "Bad Name";
    }
}

function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Invalid Array"
    }

    const number = [];

    for (const arr of array) {
        if (typeof arr === "number" && !isNaN(arr)) {
            number.push(arr);
        }
    }
    return number;
}

function password(obj) {

    if (!obj.siteName || !obj.name || !obj.birthYear) {
        return "invalid";
    }

    if (obj.birthYear.toString().length !== 4) {
        return "invalid";
    }

    const site = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1).toLowerCase();
    const pass = site + "#" + obj.name + "@" + obj.birthYear;
    return pass;
}

function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== "number") {
        return "invalid input";
    }

    let totalIncome = 0;

    for (const item of arr) {
        if (item >= 3000) {
            totalIncome += item - (item * 0.2);
        } else {
            totalIncome += item;
        }
    }
    const savings = totalIncome - livingCost;

    if (savings >= 0) {
        return savings;
    }
    else {
        return "earn More";
    }
}