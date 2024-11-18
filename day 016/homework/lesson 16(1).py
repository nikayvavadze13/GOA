answer_list = ["fight", "friend", "robbery"]
print("answers")
print(answer_list[0])
print(answer_list[1])
print(answer_list[2])
user_input = input("please enter from answers")
if user_input == answer_list[0]:
    print("wrong answer")
elif user_input == answer_list[1]:
    print("right answer")
elif user_input == answer_list[2]:
    print("neutral answer")
else:
    print("DEAD")


