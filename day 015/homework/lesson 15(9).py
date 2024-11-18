
user_number = int(input("Enter a number: "))

even_numbers_list = []

for i in range(user_number + 1):
    if i % 2 == 0:
        even_numbers_list.append(i)


print( user_number, even_numbers_list)
