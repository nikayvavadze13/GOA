num1 = int(input("enter number: "))
num2 = int(input("enter number: "))

operator = input("enter operator like(+, -, *, /, **)")

if operator == "+":
    print(num1 + num2)
elif operator == "-":
    print(num1 - num2)
elif operator == "*":
    print(num1 * num2)
elif operator == "/":
    print(num1 / num2)
elif operator == "**":
    print(num1 ** num2)