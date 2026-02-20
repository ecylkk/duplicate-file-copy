# VS Code Duplicate File / Folder Extension 📁✨

A simple and efficient VS Code extension that allows you to quickly duplicate files or folders via the right-click menu — just like Windows Explorer or macOS Finder.

---

## 📌 Overview

This lightweight extension helps you duplicate files or folders directly from the VS Code Explorer without manual copy, paste, or renaming.

---

## ✨ Features

- **Right-click duplication** for files and folders  
- **Smart naming** with automatic `-copy` suffix  
  - `index.ts` → `index-copy.ts`
- **Native integration** with VS Code Explorer context menu  
- **Recursive support** for empty folders and large directory trees  

---

## 🖱 Usage

1. Right-click a file or folder in the VS Code Explorer  
2. Select **Duplicate File / Folder**  
3. A duplicated copy will be created in the same directory  

---

## 🚀 Installation

### Option 1: Install via VSIX (Recommended)

1. Download the latest `.vsix` file from the Releases page  
2. Open VS Code and go to Extensions  
3. Click `...` → **Install from VSIX...**  
4. Select the downloaded file to install  

### Option 2: Build from Source

```bash
git clone https://github.com/ecylkk/vscode-duplicate-file-copy.git
cd vscode-duplicate-file-copy
npm install
npx @vscode/vsce package