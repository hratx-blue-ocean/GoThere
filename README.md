# GoThere
A streamlined travel plan web application


## onboarding

1. clone the project repo
```sh
git clone https://github.com/hratx-blue-ocean/GoThere.git
```
2. Navigate to the GoThere/client
```sh
run npm install
```

## git-workflow

Before beginning any work on new features, pull from the main branch to update your local code to the most recent version:

1. switch to the main branch
```sh
git checkout main
```

2. pull most recent commits
```sh
git pull origin main
```

create a new feature branch if needed
```sh
git checkout -b <new branch name>
```
otherwise

3. switch to the feature branch
```sh
git checkout <branch name> 
```

4. Check the current branch you are on
```sh
git branch
```

5. Merges any changes pulled from the master into the feature branch
```sh
git rebase main <feature branch>
```

6.Do all of your work on your feature branches
7.When you are ready to save changes, commit and push to the branch.
```sh
git add
git commit
git push origin <branch-name>
```
## pull requests
1. When you are ready to merge your feature branch to the main branch, open a pull request
2. Be sure to pull into the base repository/main branch from the correct feature branch
> base : **main** *from* compare : **feature-branch**
* Include the ticket number in the pull request body 
* Tag a team member in a comment for review before merging
3. When the pull request is approved, merge the pull request
4. Then, add the new changes to your local repo:
```sh
 git checkout main
 git pull origin main
 ```
5. witch back to whatever branch you were working on
```sh
git checkout <branch name>
git rebase main <branch name>
```






