def quarters(number, number1):
    number_list = []
    filtered_num = []

    for i in range(number, number1):
        number_list.append(i)

    for i in number_list:
        if i % 2 == 0:
            filtered_num.append(i ** 2)
        elif i % 2 != 0:
            filtered_num.append(i ** 0.5)
    return filtered_num

number = int(input("enter a number:"))
number1 = int(input("enter a number: "))

result = quarters(number, number1)

print(result)