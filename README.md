# fried-rice

## Setup

Replace `rice.dev-edition-default` with your preferred profile (*Root Directory* in [about:profiles](about:profiles)), `git@github.com:runarsf/fried-rice.git` with your Firefox rice-repo, and `main` with your remote branch.

### Existing Firefox profile

```bash
cd rice.dev-edition-default
git init
git remote add origin git@github.com:runarsf/fried-rice.git
git pull origin main
# If there are conflicting files, remove local conflicts (see below)
git checkout main
git branch --set-upstream-to=origin/main main
```

> error: The following untracked working tree files would be overwritten by checkout:
>   user.js
> Please move or remove them before you switch branches.
> Aborting
> > ```bash
> > rm -f user.js
> > git pull
> > ```


### New profile

```bash
git clone git@github.com:runarsf/fried-rice.git
firefox about:profiles
# Create New Profile > Next
# Enter Profile Name: Rice
# Choose Folder... > rice.dev-edition-default
# Finish
# Launch profile in new browser
```

## Other things

- Check status with many files: `git status -uno` (https://stackoverflow.com/a/57514326)
- https://ffprofile.com/
- https://support.mozilla.org/gl/questions/1264072
  - Default: `.default-release`
  - Developer Edition: `.dev-edition-default`
  - Nightly: `.default-nightly`
- To only add the files you want, either add everything except the ones you want to [.gitignore](https://github.com/runarsf/fried-rice/blob/main/.gitignore) or `git config --local status.showUntrackedFiles no` and manually add them.
