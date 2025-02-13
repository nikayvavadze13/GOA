class MathHelper {
    static PI = 3.141592653589793;
    static E = 2.718281828459045;


    static power(base, exponent) {
        return Math.pow(base, exponent);
    }


    static sqrt(number) {
        return Math.sqrt(number);
    }


    static factorial(n) {
        if (n < 0) return undefined; 
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }


    static degreesToRadians(degrees) {
        return degrees * (this.PI / 180);
    }


    static radiansToDegrees(radians) {
        return radians * (180 / this.PI);
    }
}


console.log(MathHelper.PI);  
console.log(MathHelper.power(2, 3));  
console.log(MathHelper.sqrt(25)); 
console.log(MathHelper.factorial(5)); 
console.log(MathHelper.degreesToRadians(180)); 
console.log(MathHelper.radiansToDegrees(MathHelper.PI)); 
