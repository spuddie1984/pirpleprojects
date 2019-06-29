"""
Create a note-taking program. When a user starts it up, it should prompt them for a filename.
If they enter a file name that doesn't exist, it should prompt them to enter the text they 
want to write to the file. After they enter the text, it should save the file and exit.
If they enter a file name that already exists, it should ask the user if they want:
A) Read the file
B) Delete the file and start over
C) Append the file
If the user wants to read the file it should simply show the contents of the file on the screen.
If the user wants to start over then the file should be deleted and another empty one made in its place. 
If a user elects to append the file, then they should be able to enter more text, and that text should be added 
to the existing text in the file. 
"""
# need to import a library for checking if a folder/file exists
import os

# Ask the user for a filename if it exists
fileName = input("Please enter a filename to use\n")

"""
Extra Credit:
Allow the user to select a 4th option:
D) Replace a single line
If the user wants to replace a single line in the file, 
they will then need to be prompted for 2 bits of information:
1) The line number they want to update.
2) The text that should replace that line.
"""

