function multiplyNumbers() {
    while (true) {
        const num1 = prompt("enter your first number:");
        const num2 = prompt("enter your second number:");

        if (num1.toLowerCase() === 'exit' || num2.toLowerCase() === 'exit') {
            console.log("initializing ended, bye!");
            break;
        }

        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
            console.log("enter valid number!");
            continue;
        }

        const product = number1 * number2;
        console.log(`multiply of numbers: ${product}`);
    }
}


multiplyNumbers();
