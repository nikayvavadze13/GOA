password = "paroli"
user = "useri"

user_input = input("user: ")
password_input = input("password: ")

if user_input == user and password_input == password:
    print("login successful")
else:
    print("login failed")