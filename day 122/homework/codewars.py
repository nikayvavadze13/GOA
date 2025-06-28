def bouncing_ball(h, bounce, window):
    if not (h > 0 and 0 < bounce < 1 and window < h):
        return -1

    result = 0
    
    while h > window:
        result += 1
        h *= bounce
        if h > window:
            result += 1
    return result