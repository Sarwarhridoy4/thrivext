# Git-hub

### 🧰 Git & GitHub Command Reference 📘

---

### ⚙️ **Basic Git Configuration**

| Command                                            | Description                        |
| -------------------------------------------------- | ---------------------------------- |
| `git config --global user.name "Your Name"`        | Set your Git username              |
| `git config --global user.email "you@example.com"` | Set your Git email address         |
| `git config --global core.editor code`             | Set default editor (e.g., VS Code) |

---

### 📁 **Repository Setup**

| Command                      | Description                       |
| ---------------------------- | --------------------------------- |
| `git init`                   | Initialize a new local repository |
| `git clone <repository-url>` | Clone a remote repository         |

---

### 📋 **Status & Logs**

| Command             | Description                     |
| ------------------- | ------------------------------- |
| `git status`        | View current changes            |
| `git log`           | View full commit history        |
| `git log --oneline` | Condensed one-line history view |

---

### ✅ **Staging & Committing**

| Command                   | Description                   |
| ------------------------- | ----------------------------- |
| `git add <filename>`      | Stage a specific file         |
| `git add .`               | Stage all changes             |
| `git commit -m "message"` | Commit changes with a message |

---

### 🌿 **Branching**

| Command                  | Description                         |
| ------------------------ | ----------------------------------- |
| `git branch`             | List all branches                   |
| `git branch <name>`      | Create a new branch                 |
| `git checkout <name>`    | Switch to a branch                  |
| `git checkout -b <name>` | Create and switch to a new branch   |
| `git merge <branch>`     | Merge a branch into the current one |

---

### 🔄 **Sync with GitHub**

| Command                       | Description                   |
| ----------------------------- | ----------------------------- |
| `git remote add origin <url>` | Connect to remote GitHub repo |
| `git push -u origin main`     | First push to GitHub          |
| `git push`                    | Push local commits to remote  |
| `git pull`                    | Pull updates from remote      |

---

### 🧽 **Undo / Reset**

| Command                  | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `git reset <file>`       | Unstage file but keep changes                  |
| `git checkout -- <file>` | Discard file changes                           |
| `git reset --hard HEAD`  | Revert everything to last commit (⚠️dangerous) |

---

### 📦 **Remotes**

| Command                               | Description            |
| ------------------------------------- | ---------------------- |
| `git remote -v`                       | View connected remotes |
| `git remote set-url origin <new-url>` | Change remote URL      |

---

### 🧹 **Clean-Up**

| Command         | Description                      |
| --------------- | -------------------------------- |
| `git clean -f`  | Remove untracked files           |
| `git clean -fd` | Remove untracked files & folders |

---

### 💻 **GitHub CLI (optional)**

| Command                       | Description               |
| ----------------------------- | ------------------------- |
| `gh auth login`               | Authenticate GitHub CLI   |
| `gh repo create`              | Create repo from terminal |
| `gh repo clone <user>/<repo>` | Clone using GitHub CLI    |

---

### ✅ Tips:

- Add `.gitignore` for files you want Git to ignore.
- Always pull before pushing.
- Use branches to avoid messy main history.
