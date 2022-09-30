/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "git is a free software which allows devs to save their code projects as multiple points, and be able to access those saved points. git can also be used to collaborate easily with other devs on the same project. git tracks software development."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "GitHub is a free online website, which allows you to store and easily view your git saves. It also provies a GUI for easy reading and access of your git saved points.GitHub also makes it easier to collaborate on the same project from different computers and locations. GitHub also allows sharing of code and committs to the internet."

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = "Git init is a git command. It is entered in the console, inside the directory of the files you want to initialize. 'git init' creates a new repository in the specified directory. Once you have created a repository for a directory, you can then use other git commands to track your code and save snapshots."

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDefinition = "'git clone' is a git command, somewhat similar to 'git init', in that it is usually a one-time command within a project session. It creates a working copy of the repository. It could be compared to creating a fork of someone's code."

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition = "'git status' is a very useful git command, used very often. The command is used when you want to easily view the status of your files compared to the last git save/commit, or to the git source. It will tell you whether or not your code has been updated, in which case you can tell if you need to save or not, or if you are even able to save. It could be compared to using 'console.log()' in your code to make sure it is working correctly at each step."

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition = "'git add' is a git command line to stage your code for saving/commit. It snapshots your code, but does not save it. it is usually followed by a commit command to then save the snapshot."
let gitAddCode = "git add ."

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition = "git commit is another command line which saves any added code. It is preceded by the 'git add .' command, which creates a snapshot, then git commit saves that snapshot to the repository."
let gitCommitCode = 'git commit -m "initial commit".'
//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDefinition = "'git push' is a command line which syncs your system's repository with the repository stored on the internet. Using git push often ensures that the onlines repository is always up to date with your work."