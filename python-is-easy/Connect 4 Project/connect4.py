"""
Once you've got the rules down, your assignment should be fairly straightforward. 
You'll want to draw the board, and allow two players to take turns placing their pieces on the board 
(but as you learned above, they can only do so by choosing a column, not a row). 
The first player to get 4 across or diagonal should win!

Extra Credit:

Want to try colorful pieces instead of X and O? 
First you'll need to figure out how to import a package like termcolor into your project. 
We're going to cover importing later in the course, 
but try and see if you can figure it out on your own. 
Or you might be able to find unicode characters to use instead, 
depending on what your system supports. Here's a hint: print(u'\u2B24')
"""
# playing area 7w 6h
# 123456789112345
# | | | | | | | | row1
# |-------------|  row2 
# | | | | | | | | row3
# |-------------| row4
# and so on ........

# lets add a splash of color to our game
from termcolor import colored

def drawBoard(move):
    # define board size
    rows = 6
    columns = 7
    for row in range(1,(rows * 2)):
        # print non-seperator rows
        if row % 2 != 0:
            # loop through each column
            for column in range(0,(columns * 2)):
                # print column borders,(end stops print moving to the next line)
                if column % 2 == 0:
                    print("|",end="")
                # print column tiles, (end stops print moving to the next line)
                elif column != ((columns * 2) -1):
                    print(" ",end="")
                # dont forget to print the last column    
                else:
                    print(" |")
        else:
            # print seperators with borders
            stringSeperator = "|" + ("-" * ((columns * 2) -1)) + "|" 
            print(stringSeperator)



# create a gameBoard array to keep track of players turns
#  columns      1     2     3     4     5     6     7     
gameBoard = [[[" "],[" "],[" "],[" "],[" "],[" "],[" "]], # row 1
             [[" "],[" "],[" "],[" "],[" "],[" "],[" "]], # row 2
             [[" "],[" "],[" "],[" "],[" "],[" "],[" "]], # row 3
             [[" "],[" "],[" "],[" "],[" "],[" "],[" "]], # row 4
             [[" "],[" "],[" "],[" "],[" "],[" "],[" "]], # row 5
             [[" "],[" "],[" "],[" "],[" "],[" "],[" "]]] # row 6
for gameTile in gameBoard:
    print(gameTile)



# update the game board upon each players turn
# perform checks to place pieces in the correct areas/tiles
def gameBoardUpdater(input):
    player1 = "O"
    player2 = "X"
    

# check for player won condition vertically
def verticalChecker(input):
    # check adjacent rows for 4 in a row
    print("vertical check")

# check for player won condition horizontally
def horizontalChecker(input):
    print("horizontal check")

# check for player won condition diagonally
def diagonalChecker(input):
    print("diagonal check")

player = 1

# check for players turn then ask for player to select a column 
while(True):
    if player == 1:
        print(f"players ",player + " turn")
        player1 = int(input("which column would you like to pick"))
        
        if gameBoard[0][player1] != " ":
            player1 = int(input("Sorry that column is full please choose another one"))
    else:
        player2 = int(input("which column do you want to pick"))