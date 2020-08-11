# git-crash-course

Traversy Media Git Tutorial - https://youtu.be/SWYqp7iY_Tc

***

## Notes

### Git

* Version control system (VCS)
  * Tracks changes made to files over time
* Part of SCM (source code management, not software configuration management)
* Distributed or decentralized version control (DVC)
  * As opposed to centralized version control (CVC) programs like Subversion
* Coordinate work between multiple developers
* Local & remote repositories

### Features

* Keep track of code history
* "Snapshots" of files called commits
* Visit any snapshot at any time
* Stage files before commiting

### Configuration

`$ git config --global user.name "[name]"`

Sets the name you want attached to your commit transactions

`$ git config --global user.email "[email address]"`

Sets the email you want attached to your commit transactions

### Reposiotry

* folder for a project
* contains all of the project's files
* stores each file's revision hisotry

`$ git init`

Initialize git repository in current directory (creates .git folder which stores the project's history)

`$ git status`

Show differences between working tree and staging area (index)

Note **(index = staging area)**

`$ git diff ...`

Show differences (index and a tree, two trees, two files, etc.)

`$ git add <file> ...`

Adds file to staging area (index) for commit

`$ git add .`

Adds all files with changes to the staging area (index) for commit

`$ git reset <file>`

Removes file from staging area (index) but preserves its contents

`$ git commit`

Commit changes inside staging area (index)

`$ git commit -m 'commit message'`

Commits with the given commit message

### Branching

`$ git branch`

List all branches

`$ git branch <branch-name>`

Creates specified branch

`$ git branch -d <branch-name>`

Deletes specified branch

`$ git checkout <branch-name>`

Switches to the specified branch and updates working directory

`$ git checkout -b <branch-name>`

Checkout and create specified branch

`$ git merge <branch-name>`

Combines the specified branch's history into the current branch in a 'merge commit'

`$ git rebase <branch>`

Reapply commits from specified branch on top of the current branch

Merge vs Rebase

Rebasing...

* provides cleaner history (linear)
* more readable graph
* tougher to resolve conflicts

Merging...

* preserves history
* better for merge conflicts
* easy to undo

`$ git cherry-pick <branch>`

Cherrypick commits from specified branch to merge into current branch

### Refactor

`$ git rm <file>`

Deletes file from working directory and stages deletion

`$ git rm --cached <file>`

Removes file from version control but preserves the file locally

`$ git mv <original> <renamed>`

Changes the file name and prepare it for commit

### History

`$ git log`

Shows commit log accessible from the refs (heads, tags, remotes), a history of all commits for the branch you are on

`$ git reflog`

A record of all commits that are or were referenced in your repo at any time (local recording which is pruned after 90 days by default), a log of where your HEAD and branch references have been.

### Mistakes

`$ git reset <commit>`

Undoes all commits after <commit>, preserving changes locally

`$ git reset --hard <commit>`

Discards all history and changes back to the specified commit

### Remote

* git repo hosted on the Internet or some other network
  * GitHub
* cloning remote repo creates a local version on your machine
  * remote repo colloquially called origin
  * sandbox to experiment without affecting original codebase
  * establishes a connection between local and remote repos (push/pull)
* team members clone single remote in order to collaborate efficiently
* multiple remotes can be added (upstream for forks)

`$ git clone <url>`

Clones the entire specified repo into a new folder

`$ git remote (-v)`

List all remote repos

`$ git remote add <remote> <url>`

Adds the specified repo at url as a remote called 'remote'

`$ git push <remote> <branch>`

Push local branch commits to remote repo (must pull before pushing new commits)

`$ git push --set-upstream origin master`

Push to origin while also setting origin as upstream to master **(-u works similarly)

`$ git fetch <remote>`

Download new data from a remote repo

`$ git merge <remote>/<branch>`

Combines the remote branch into the current local branch

`$ git pull`

Download and merge data from a remote repo (effectively a fetch and merge)

### Fork

`$ git remote add upstream <url>`

Add url remote repo to act as synced fork (upstream)

`$ git fetch upstream`

`$ git merge upstream/master`

## Extras

### .gitignore

* file that lists files/directories that should not be tracked by git
* utilizes file/directory names and other specifiers/expressions

### Hooks

* .git/hooks
* shell scripts that trigger when specific git actions are performed
* useful tool for automating checks in daily workflow
* built-in feature

### Submodules

* like child repositories of one parent repository
* pointer commit tells parent repo which files from submodule to include in the main repo
* pointer commit needs to be manually updated everytime
* useful for working in parallel
