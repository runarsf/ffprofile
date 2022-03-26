# FirefoxCSS


## Setup

Replace `rice.dev-edition-default` with your preferred profile (*Root Directory* in [about:profiles](about:profiles)), `git@github.com:runarsf/firefoxcss.git` with your Firefox rice-repo, and `main` with your remote branch.


### Existing Firefox profile

```bash
cd rice.dev-edition-default
git init
git remote add origin git@github.com:runarsf/firefoxcss.git
git pull origin main
# If there are conflicting files, remove local conflicts and pull again
git checkout main
git branch --set-upstream-to=origin/main main
```


### New profile

```bash
git clone git@github.com:runarsf/firefoxcss.git
firefox about:profiles
# Create New Profile > Next
# Enter Profile Name: Rice
# Choose Folder... > rice.dev-edition-default
# Finish
# Launch profile in new browser
```


## Setups

- Tree styles:
  - https://www.reddit.com/r/FirefoxCSS/comments/rmi8dg/yet_another_sidebery_setup/?utm_source=share&utm_medium=web2x&context=3
  - https://www.reddit.com/r/FirefoxCSS/comments/rqo5z6/some_people_asked_for_the_css_so_here_is_my_setup/?utm_source=share&utm_medium=web2x&context=3
  - https://github.com/UnlimitedAvailableUsername/Edge-Mimicry-Tree-Style-Tab-For-Firefox?ref=codetea.com
  - https://github.com/ranmaru22/firefox-vertical-tabs
  - https://www.reddit.com/r/FirefoxCSS/comments/lx3z12/edgelike_vertical_tabs_but_better_with_continued/?utm_source=share&utm_medium=web2x&context=3


## Other things

- If you're using GitHub Desktop, you have to either enable *File > Options... > Advanced > Use system OpenSSH* or change the remote to use http auth (`git remote set-url https://github.com/runarsf/firefoxcss.git`).
- Check status with many files: `git status -uno` (https://stackoverflow.com/a/57514326)
- https://ffprofile.com/
- Profile suffixes - https://support.mozilla.org/gl/questions/1264072
  - Default: `.default-release`
  - Developer Edition: `.dev-edition-default`
  - Nightly: `.default-nightly`
- To only add the files you want, either set up [.gitignore](https://github.com/runarsf/firefoxcss/blob/main/.gitignore) or `git config --local status.showUntrackedFiles no` and manually add them.
- Live-debug: enable `Enable browser chrome and add-ons debugging toolboxes` and `Enable remote debugging` in devtools settings -> ctrl+shift+alt+i
- On windows, make sure to do `git config core.autocrlf false` so git doesn't automatically turn line endings to CRLF
