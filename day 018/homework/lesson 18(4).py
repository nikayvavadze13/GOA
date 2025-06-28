def list_of_numbers(index):
    empty_list1 = []
    empty_list2 = []

    for i in index:
        empty_list1.append(i)

    for j in range(len(empty_list1)):
        if j % 2 == 0:
            empty_list2.append(empty_list1[j])
    return empty_list2




index = input("enter a surname: ")
print(list_of_numbers(index))

