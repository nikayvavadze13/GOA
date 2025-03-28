user_input = int(input("enter a number: "))
user_input2 = int(input("enter a number: "))

result = 0

while result < user_input + user_input2:
    result += user_input2 + user_input
    print(result)