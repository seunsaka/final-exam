// Part 1: Class and Objects

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    updatePrice(newPrice) {
        this.price = newPrice;
    }

    sellProduct(quantity) {
        if (this.quantity >= quantity) {
            this.quantity -= quantity;
            return quantity * this.price;
        } else {
            return "Error: Not enough stock";
        }
    }

    restockProduct(quantity) {
        this.quantity += quantity;
    }
}


// Part 2: Arrays & Sets

function findUniqueWords(words) {
    return [...new Set(words)];
}

function commonElements(array1, array2) {
    return array1.filter(element => array2.includes(element));
}


// Part 3: Maps

class StudentGrades {
    constructor() {
        this.grades = new Map();
    }

    addGrade(studentName, grade) {
        this.grades.set(studentName, grade);
    }

    getGrade(studentName) {
        return this.grades.get(studentName);
    }

    updateGrade(studentName, newGrade) {
        this.grades.set(studentName, newGrade);
    }

    removeStudent(studentName) {
        this.grades.delete(studentName);
    }
}


// Part 4: Cybersecurity

function validatePassword(password) {
    const hasMinLength = password.length >= 8;
    const hasSpecialChar = /[!@#$%^&*()_+=-{};:'<>,./?]/.test(password);
    return hasMinLength && hasSpecialChar;
}
