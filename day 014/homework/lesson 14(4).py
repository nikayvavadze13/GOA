num1 = int(input("enter a number: "))
num2 = int(input("enter a number: "))

list = []
for i in range(min(num1, num2), max(num1, num2)):
    list.append(i)
for num in list:
    if num % 5 == 0:
        print(num)