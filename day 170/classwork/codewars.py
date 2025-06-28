def is_pangram(st):
    st = st.lower()
    x = set("abcdefghijkelmnopqrstuvwsynsz")
    y = set(st)
    return x.issubset(y)