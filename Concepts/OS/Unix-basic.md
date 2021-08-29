## Unix 기본 명령어들

이건 나중에 쓸 때 찾아서 쓰는 용도로 쓰자

달달 외운다고 당장 안쓰면 잊혀지니까

<br>

### Basic Unix Commands

Use the following commands to help you manage your Unix account.

**IMPORTANT**: The Unix (Ultrix) operating system is case sensitive. All commands must be typed in lower-case letters unless noted otherwise.

---

**Displaying a Directory**

**ls**

Lists the names of files in a particular Unix directory. If you type the ls command with no parameters or qualifiers, the command displays the files listed in your current working directory. When you give the ls command, you can add one or more modifiers to get additional information.

```
Example: "ls"
Result: Lists the names of files in your default directory, in alphabetical order.


Example: "ls -l"
Result: Gives a "long listing" of the files in your directory. In addition to the file name, the long listing shows protection information, file owner, number of characters in file, and the date and time of the last change to the file.


Example: "ls -a"
Result: Causes all your files to be listed, including those files that begin with a period (i.e., hidden files).

For more information, type "man ls" at the Unix system prompt.
```

---

**Displaying and Concatenating (Combining) Files**

**more**

Enables examination of a continuous text one screenful at a time on a terminal. It normally pauses after each screenful, printing -- More -- at the bottom of the screen. Press RETURN to display one more line. Press the SPACE BAR to display another screenful. Press the letter Q to stop displaying the file.

```
Example: "more newfile"
Result: Displays the contents of "newfile" one screen ("page") at a time.

For more information about this command, type "man more" at the Unix system prompt.
```

**cat**

Displays the contents of a file on your terminal.

```
Example: "cat newfile"
Result: Displays the contents of the file "newfile" on your terminal.


Example: "cat newfile oldfile"
Result: Displays the contents of two files–"newfile" and "oldfile"–on your terminal as one continuous display.

While a file is being displayed, you can interrupt the output by pressing "CTRL + C" and return to the Unix system prompt. "CTRL + S" suspends the terminal display of the file and the processing of the command. To resume display, press "CTRL + Q". The interrupted command displays lines beginning at the point at which processing was interrupted.

The cat command is also used to concatenate (combine) files and put them into another file. If you concatenate files to another one that already exists, the existing contents are permanently lost.


Example: "cat fileone filetwo filethree > newfile"
Result: Links together three files–fileone, filetwo, and filethree–into a new file called "newfile." The original files remain intact.

For more information about the cat command, type "man cat" at the Unix system prompt.
```

---

**Copying Files**

**cp**

Makes copies of your files. You can use it to make copies of files in your default directory, to copy files from one directory to another directory, or to copy files from other devices.

```
Example: "cp fileone filetwo"
Result: Copies the contents of fileone to a file named filetwo. Two separate files now exist.


Example: "cp /usr/neighbor/testfile ."
Result: Copies the file testfile from the directory /user/neighbor to your Unix account. The period( . ) at the end of the command line indicates that the file is to be copied to your current working directory and the name will remain the same.

To copy a file from another user's directory on Unix, you must know the person's username.


Example: "cp ~username/file1 yourfile"
Result: Copies the file "file1" from user to your Unix account. The name of the file in your directory becomes yourfile. (Protections must be set for file to be readable by you in the other user's directory in order to be able to copy the file.)

For more information, type "man cp" at the Unix system prompt.
```

---

**Deleting Files**

**rm**

Deletes specific files. You can enter more than one file specification on a command line by separating the file specifications with spaces.

```
Example: "rm newfile"
Result: Deletes the file named "newfile."


Example: "rm newfile oldfile"
Result: Deletes two files–"newfile" and "oldfile."


Example: "rm new*"
Result: Deletes all files that begin with the prefix new.

For more information, type "man rm" at the Unix system prompt.
```

---

**Renaming Files**

**mv**

This command changes the identification (name) of one or more files.

```
Example: "mv oldfile newfile"
Result: Changes the name of the file "oldfile" to "newfile." Only one file will exist.


Example: "mv oldfile bin/newfile"
Result: Changes the name of the file "oldfile" to "newfile" and places it in the directory /bin. Only one file will exist.

For more information, type "man mv" at the Unix system prompt.
```

---

**Printing from Unix**

The "lpr" command prints files on Unix. Use the -Pqueuename option to select a printer.

```
Example: "lpr -Ppittprint sample.file"
Result: This is the default output. Single-sided output, one page-worth of text per side, portrait format. Output is queued to the Pitt Print Stations.

The Unix operating system is case sensitive; type all commands in lower-case letters unless noted otherwise.
```

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

참고

https://www.technology.pitt.edu/help-desk/how-to-documents/basic-unix-commands
