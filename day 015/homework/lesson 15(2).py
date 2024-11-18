incorrect_count = 0

while True:
    password = input("Enter the password: ")
    if password == "Goa best":
        print("Correct password entered. Access granted!")
        print("Number of incorrect attempts:", incorrect_count)
        break
    else:
        print("Incorrect password!")
        incorrect_count += 1
    