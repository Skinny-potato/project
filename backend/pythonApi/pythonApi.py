import sys
# Takes first name and last name via command
# line arguments and then display them

import findingSimilarity

theInput=sys.argv[1]
# print(theInput)


def finalProcess():
    # return (f"the input you provided to the python server is ,{theInput} ")
    return (findingSimilarity.report(theInput))

print(finalProcess())


