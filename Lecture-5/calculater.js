const prompt = require('prompt-sync')();
const { sum, sub, mul, div, mod } = require('./function');

const calculator = () => {
    let calculator = true;

    while (calculator) {
        console.log(`
Select an operation:
1. Addition (+)
2. Subtraction (-)
3. Multiplication (*)
4. Division (/)
5. Modulus (%)
0. Exit
        `);

        const choice = prompt("Enter your choice:-: = ");
        
        if (choice === "0") {
            console.log("Exiting the calculator. Goodbye!");
            continueCalculating = false;
            break;
        }

        const num1 = Number.parseFloat(prompt("Enter first number: "));
        const num2 = Number.parseFloat(prompt("Enter second number: "));
        let ans;
        let operation;

        switch (choice) {
            case "1":
                ans = sum(num1, num2);
                operation = "+";
                break;
            case "2":
                ans = sub(num1, num2);
                operation = "-";
                break;
            case "3":
                ans = mul(num1, num2);
                operation = "*";
                break;
            case "4":
                ans = div(num1, num2);
                operation = "/";
                break;
            case "5":
                ans = mod(num1, num2);
                operation = "%";
                break;
            default:
                console.log(`Invalid choice "${choice}"! Please select a valid operation.`);
                continue;
        }

        console.log(`Answer: ${num1} ${operation} ${num2} = ${ans}\n\n`);
    }
}

calculator();
