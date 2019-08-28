# BASICS Command, Github.
#Getting Started:
#Create a Github repository: 
•	Login to your Github account >
•	Create a repository with readme.md file.
•	Bam! You created the repo and good to go.
#Cloning the repository:
For cloning the repo you need a Git Bash which you can install while installing git.
To install git and git-bash visit: https://git-scm.com/downloads
Setting the clone in your local system:
Open the Git Bash prompt and run:
•	Go to the desired directory and run git-bash.
•	To clone:  git clone “URL of your git repository clone (right green button)”.
•	Change directory: cd “name of the folder that is cloned”.
•	List contents of directory: ls (to list all the folder of current directory)
Few of the git basic commands are:
1.	Git status: It shows the status of your file. If you change the file it highlights it in red.
2.	Git add: Adds file to staging area, the file added to staging area is highlighted green.
3.	Git commit –m ‘message’: It commits the code to local version control database.
4.	Git log: It shows all the logs.
5.	Git push: Once the code is committed to local database, push is used to push the code to Github.
6.	Git difftool: Shows difference between local changes and previous version of the file.
#Undoing/ Reverting/ Resetting:
Git checkout “staged file” eg: git checkout index.js.
While undoing we can use “.” to undo all at once (This is for code which is not committed).

For Committed: Git revert “commit id”, to get the id run Git log and copy. This will open the summary of revert so type ‘:q’ to close and change. This will commit a new log.

Git revert –n ‘commit id’, this will revert but don’t commit you’ll have to commit explicitly.
Git reset –hard ‘commit id’, this with reset the code to that particular commit id.



#Branches (Create, Merge, Delete)
Why Branches?
If you have a code and you want to do some experimental things to it you make a copy of it with different names say original.md, experiment.md, this way you can have the experiment to the same, but this is not the way, so Github provides the branch feature which does the same thing, it allows you to create two branches where you can work parallel to both branches, you can make experiment, test and once the things get okay, you can merge.
*Master is the default branch
To check branch: git branch
To create a new branch: git branch ‘new branch name’
To make branch active: git checkout ‘branch name’
To merge both the branch: First go to base branch where you want to merge, and use the command git merge thirsty, it’ll ask to type the commit message, you want use ‘:qw’ to save.
Git push: change the branch to which you want to push and use the command, it’ll verify copy the command git push –setupstream origin ‘branch name’ and run.
To delete a branch: we can use both checkout and create branch at a time, use command line
git checkout –b ‘new branch name’,
 To delete, git branch –d ‘branch name’. 

#HEAD
What is head?
Head is the reference to the latest commit in the current branches (in most cases).
Git show head, will show the latest commit.
To move through different commit we use HEAD~1, HEAD~2 etc.
Say you want to reset the code to last-third commit so use:
Git reset HEAD~2
Basically, head is the shortcut to reach the commit instead of typing it manually.


.gitignore file:
Create a .gitignore file manually or you can type touch .gitignore in git-bash.
Put the entire directory that you want to ignore inside the .gitignore
*Push the .gitignore file and you are ready to go.
