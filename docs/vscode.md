# VSCode Guide

I added this to my `keybindings.json` file.

```json
{
  "key": "a",
  "command": "explorer.newFile",
  "when": "explorerViewletFocus && !inputFocus"
}
```

This did not work as _expected_ it still uses the `a` key when I am typing in a file name as the key to make a new file. I feel like that is something that can be fixed with a conditional statement. But, I am not sure how to do that. It might be a good thing to ask the AI about.

Now, when I am _focused_ on the explorer I can make a new file with the `a` key.

## Navigating Windows

I can use `ctrl + tab` to do some movement. I am not sure if that is the best way to do it.

![elmo from sesame street is looking at the camera while standing in front of a wall .](https://media.tenor.com/RYvCCepol0gAAAAC/elmo-shrug.gif)

## VSCode Setup

- Font:
- Theme:
- Icons:
  - [x] Material Icon Theme

I just set up the editor so that markdown files can have lines that are longer than 80 characters wide.

## Extensions

- [x] Vim
- [ ] Markdown Preview Enhanced
- [ ] Markdown All in One
- [ ] Markdownlint
- [ ] React Tools
- [ ] Tailwind CSS IntelliSense
- [ ] Prettier

## Things I Want

- [ ] Markdown Preview
- [ ] Relitive Line Numbers
- [ ] Key command to stage all files
- [ ] Key command to unstage all files

## Things I Want to Learn

- [ ] How to use the debugger
- [ ] How to use the terminal
- [ ] How to use the command palette

Look into the following:

- [ ] [Console Ninja](https://console-ninja.com/)
- [ ] Document how to use marp
