def set_alarm(employed, vacation):
    if employed == True and vacation == True:
        return False
    elif employed == False and vacation == True:
        return False
    elif employed == False and vacation == False:
        return False
    else:
        return True