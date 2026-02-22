# VS Code Duplicate File / Folder Extension 📁✨

A simple and efficient VS Code extension that allows you to quickly duplicate files or folders, or open Git Bash at any location via the right-click context menu.

---

## 📌 Overview

This lightweight extension enhances the VS Code Explorer right-click menu with two useful features:
- Instantly duplicate files or folders with a `-副本` suffix
- Open Git Bash terminal at the selected file or folder location

---

## ✨ Features

- **Right-click duplication** for files and folders  
- **Smart naming** with automatic `-副本` suffix  
  - `index.ts` → `index-副本.ts`
- **Open in Git Bash** — right-click any file or folder to open Git Bash at that location  
- **Native integration** with VS Code Explorer context menu  
- **Recursive support** for empty folders and large directory trees  

---

## 🖱 Usage

### Duplicate File / Folder
1. Right-click a file or folder in the VS Code Explorer  
2. Select **创建副本 (-副本)**  
3. A duplicated copy will be created in the same directory  

### Open in Git Bash
1. Right-click a file or folder in the VS Code Explorer  
2. Select **在 Git Bash 中打开**  
3. A Git Bash terminal will open at that location  

---

## 🚀 Installation

1. Download the latest `.vsix` file from the [Releases page](../../releases)  
2. Open VS Code and go to Extensions (`Ctrl+Shift+X`)  
3. Click `...` → **Install from VSIX...**  
4. Select the downloaded `.vsix` file to install  

---

## 📋 Requirements

- VS Code `^1.70.0`  
- Git for Windows (for the Git Bash feature): [git-scm.com](https://git-scm.com/)  