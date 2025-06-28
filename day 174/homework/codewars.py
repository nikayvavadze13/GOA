def will_reach_end(speed, roadmap):
    pos = 0
    cracks = 0
    distance_in_cycle = 0

    while pos < len(roadmap):
        if speed == 0:
            return False


        if roadmap[pos] == 'x':
            cracks += 1

        distance_in_cycle += 1
        pos += 1

        if distance_in_cycle == speed:

            speed -= (1 + cracks)
            cracks = 0
            distance_in_cycle = 0

    return True if pos == len(roadmap) else False



