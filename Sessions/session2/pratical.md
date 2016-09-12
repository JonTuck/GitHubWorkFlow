
#1 - Set up a new project folder

Set up a new folder on your `u` drive called `git_project`. Leave it empty for now, later on this will hold our project


#2 - Download GIT 
![](assets/git_download.png)
[https://git-scm.com/downloads](https://git-scm.com/downloads)
 



#3 - Configure GIT


### 3.1 - Using the shell 

### 3.2 - Your Identity
You need to tell GIT who you are, this information is then automatically included in you commits. Run the following commands in your shell:


```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com

```

### 3.3 -  Your Editor

```bash
git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -nosession"
```


#4 - Initiate an empty GIT Repo

- Within the shell, ensure that you are in your project root directory, by running the command:

	`pwd`

- Next, run the command:

	`git init`

- Should everything run well, you should be prompted that an empty GIT repo has been created:

 `Initialized empty Git repository in c:/your/folder/location``


#5 - Make and commit some changes

#6 - Learn how to undo things

##Resetting a single file `git checkout`
##Resetting all files to previous commit `git rest --hard`
##Reverting to an old version of the code `git revert`



