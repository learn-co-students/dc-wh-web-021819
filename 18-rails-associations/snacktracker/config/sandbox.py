friends = ["trump", "paulson", "ritchie"]
print friends[1]

# for friend in friends:
#     print friend.upper()

def startsWithR(array):
    return filter(lambda value: value.startswith(("R","r")) ,array)

print startsWithR(friends)
