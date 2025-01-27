def dot_calculator(equation):
    left, operator, right = equation.split(" ")
    left_count = len(left)
    right_count = len(right)
    if operator == "+":
        result_count = left_count + right_count
    elif operator == "-":
        result_count = left_count - right_count
    elif operator == "*":
        result_count = left_count * right_count
    elif operator == "//":
        result_count = left_count // right_count
    else:
        raise ValueError("Invalid operator")


    return "." * result_count

