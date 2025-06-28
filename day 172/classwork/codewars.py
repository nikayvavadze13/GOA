import re

def valid_phone_number(phone):
    pattern = r'^\(\d{3}\) \d{3}-\d{4}$'
    return bool(re.match(pattern, phone))
