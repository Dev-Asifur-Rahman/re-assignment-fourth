function calculateTax(income, expenses) {
    if (typeof income !== 'number') {
        return "Invalid Input";
    } else if (typeof expenses !== 'number') {
        return "Invalid Input";
    } else if (income < 0) {
        return "Invalid Input";
    } else if (expenses < 0) {
        return "Invalid Input";
    } else if (income < expenses) {
        return "Invalid Input";
    }
    return (income - expenses) * 0.2;
}


function sendNotification(email) {
    if (typeof email !== 'string') {
        return "Invalid Email";
    } else if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }
    let parts = email.split('@');
    if (parts.length !== 2) {
        return "Invalid Email";
    } else if (parts[0] === '') {
        return "Invalid Email";
    } else if (parts[1] === '') {
        return "Invalid Email";
    }
    return `${parts[0]} sent you an email from ${parts[1]}`;
}


function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    for (let i = 0; i < name.length; i++) {
        if (name[i] >= '0' && name[i] <= '9') {
            return true;
        }
    }
    return false;
}

function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return "Invalid Input";
    } else if (typeof obj.name !== 'string') {
        return "Invalid Input";
    } else if (typeof obj.testScore !== 'number') {
        return "Invalid Input";
    } else if (typeof obj.schoolGrade !== 'number') {
        return "Invalid Input";
    } else if (typeof obj.isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    let finalScore = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily) {
        finalScore += 20;
    }

    if (finalScore >= 80) {
        return true;
    } else {
        return false;
    }
}


function  waitingTime(waitingTimes  , serialNumber) {
    if (!Array.isArray(waitingTimes)) {
        return "Invalid Input";
    }

    if (typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    let total = 0;

    for (let i = 0; i < waitingTimes.length; i++) {
        total += waitingTimes[i];
    }

    let avg_time = Math.round(total / waitingTimes.length);

    if (serialNumber > waitingTimes.length) {
        let remaining = serialNumber - 1 - waitingTimes.length;
        let waiting_time = avg_time * remaining;
        return waiting_time;
    }

    return "Invalid Input";
}



