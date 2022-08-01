# Firefox Profile 🦊


## Setup

1. Set up repo in a [new profile](#new-profile) or use an [existing one](#existing-profile)
2. Sign In and Sync.  
  <kbd>Settings → Sync → Choose What To Sync → Change...</kbd>: Bookmarks, Add-ons, Settings.
3. Customize toolbar
4. Remove default bookmarks-row items
5. Set up extensions
  - **CanvasBlocker**  
    <kbd>Preferences → APIs</kbd>: Disable everything except Canvas and Audio.
  - **Terms of Service; Didn't Read**  
    <kbd>Preferences</kbd>: Disable "Send Notifications"
  - **Ublock Origin**  
    <kbd>Preferences → Filter lists ⇢</kbd>  
      &nbsp;&nbsp;&nbsp;&nbsp;<kbd>→ Privacy</kbd>: Enable "ADGuard URL Tracking Protection"  
      &nbsp;&nbsp;&nbsp;&nbsp;<kbd>→ Custom → Import</kbd>: Enter `https://raw.githubusercontent.com/DandelionSprout/adfilt/master/LegitimateURLShortener.txt`<sup><a href="https://github.com/DandelionSprout/adfilt/blob/master/LegitimateURLShortener.txt">GitHub</a></sup>  
      <kbd>Apply changes</kbd>
  - **Smart Referer**  
    <kbd>Preferences → Whitelist Sources</kbd>: Disable "Use default whitelist"
  - **Sidebery**  
    <kbd>Preferences → Help → Import</kbd>: Import `./preferences/sidebery.json`
  - **I don't care about cookies**  
    <kbd>Manage</kbd>: Enable "Run in Private Windows"


### Existing profile

```bash
cd rice.dev-edition-default
git init
git remote add origin git@github.com:runarsf/ffprofile.git
git pull origin main
# If there are conflicting files, remove local conflicts and pull again
git checkout main
git branch --set-upstream-to=origin/main main
```


### New profile

```bash
cd ~/.mozilla/firefox
git clone git@github.com:runarsf/ffprofile.git rice.dev-edition-default
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

- https://coveryourtracks.eff.org/
- find what options changes in  [about:config](about:config): `diff <(cat prefs.js) <(sleep 5; cat prefs.js)`
- https://github.com/arkenfox/user.js/issues/1080
- If you're using GitHub Desktop, you have to either enable *File > Options... > Advanced > Use system OpenSSH* or change the remote to use http auth (`git remote set-url https://github.com/runarsf/firefoxcss.git`).
- Check status with many files: `git status -uno` (https://stackoverflow.com/a/57514326)
- https://ffprofile.com/
- https://github.com/arkenfox/user.js
- https://arkenfox.github.io/gui/
- https://github.com/pyllyukko/user.js/blob/master/user.js
- Profile suffixes - https://support.mozilla.org/gl/questions/1264072
  - Default: `.default-release`
  - Developer Edition: `.dev-edition-default`
  - Nightly: `.default-nightly`
- To only add the files you want, either set up [.gitignore](https://github.com/runarsf/ffprofile/blob/main/.gitignore) or `git config --local status.showUntrackedFiles no` and manually add them.
- Live-debug: enable `Enable browser chrome and add-ons debugging toolboxes` and `Enable remote debugging` in devtools settings -> ctrl+shift+alt+i
- On windows, make sure to do `git config core.autocrlf false` so git doesn't automatically turn line endings to CRLF
