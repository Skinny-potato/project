import sys
# Takes first name and last name via command
# line arguments and then display them

import findingSimilarity
import json




# print JSON string



theInput=sys.argv[1]
# theInput="This is a balanced build centered on dealing and tanking damage using Sacred Sword and Wide Guard. It aims to offer everything you need to make Aegislash a well-rounded Pokemon on the battlefield, regardless of team composition. For offense, Razor Claw increases Aegislash's lethality when it chains its moves together with its Boosted Attacks. It also adds a slow effect to your targets, making it easier for you to unleash your attacks. For defense, Focus Band boosts Aegislash's defensive stats and makes the Pokemon more durable. Moreover, it also provides a healing effect when Aegislash's HP falls dangerously low, allowing the Pokemon to survive intense battles. Finally, for utility, Weakness Policy adds both HP and Attack for Aegislash. It also converts damage taken into more Attacks that the Pokemon can use to get ahead in a brawl."
# theInput="Whether we’re discussing Hamlet or Harry Potter, the best stories are not just about an interesting series of events: they’re about characters. While a mastery of plot can help you develop exciting twists and turns, great character development draws readers in by giving them strong characters with whom they can identify."
# print(theInput)


def finalProcess():
    # return (f"the input you provided to the python server is ,{theInput} ")
    return (findingSimilarity.report(theInput))

# print(type(finalProcess()))


try:
    Finalresult = json.dumps(finalProcess())
    print(Finalresult)
except Exception: 
    print("No PLagarism Found")