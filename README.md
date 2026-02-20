```markdown
# VS Code Duplicate File/Folder Extension 📁✨

这是一个简单高效的 VS Code 插件，让你能够像在 Windows 资源管理器或 macOS Finder 中一样，通过右键菜单快速为文件或文件夹创建副本。

[![Github](https://pfst.cf2.poecdn.net/base/image/cef0bddddf65939ae2364f884a23377e9b4623fbcb785ecb71a309653fbc7a33?pmaid=572678857)](https://github.com/ecylkk)
[![License](https://pfst.cf2.poecdn.net/base/image/4ba58a42a1fd9162b3759f934f77fea471b851e359255d522e10f301557e22c3?pmaid=572678858)](https://opensource.org/licenses/MIT)

---

# 🇨🇳 中文版

## 🌟 功能特点

- **一键复制**：右键点击文件或文件夹，直接生成副本。  
- **智能命名**：自动添加 `-副本` 后缀（例如 `index.ts` → `index-副本.ts`）。  
- **原生体验**：深度集成 VS Code 资源管理器（Explorer）右键菜单。  
- **全格式支持**：支持单个文件、空文件夹以及包含大量内容的文件夹递归复制。  

## 🚀 安装方法

### 1️⃣ 直接安装（推荐）

1. 前往 https://github.com/ecylkk/vscode-duplicate-file-copy/releases 下载最新的 `.vsix` 文件。  
2. 在 VS Code 中按下 `Ctrl+Shift+X`（Mac: `Cmd+Shift+X`）打开扩展面板。  
3. 点击右上角 `...` → 选择 **Install from VSIX...**。  
4. 选择下载的文件完成安装。  

### 2️⃣ 从源码编译

```bash
git clone https://github.com/ecylkk/vscode-duplicate-file-copy.git
cd vscode-duplicate-file-copy
npm install
npx @vscode/vsce package
```

---

# 🇯🇵 日本語版

Windows エクスプローラーや macOS Finder のように、右クリックメニューから簡単にファイルやフォルダーのコピーを作成できる VS Code 拡張機能です。

## 🌟 主な機能

- **ワンクリック複製**  
- **自動リネーム（-副本）**  
- **エクスプローラー統合**  
- **フォルダー再帰コピー対応**

## 🚀 インストール方法

1. https://github.com/ecylkk/vscode-duplicate-file-copy/releases から `.vsix` をダウンロード  
2. `Ctrl+Shift+X`（Mac: `Cmd+Shift+X`）  
3. `...` → **Install from VSIX...**

---

# 🇺🇸 English Version

A simple and efficient VS Code extension that lets you duplicate files or folders from the right-click menu.

## 🌟 Features

- **One-click duplicate**
- **Smart naming (`-copy`)**
- **Native Explorer integration**
- **Recursive folder copy**

## 🚀 Installation

1. Download `.vsix` from  
   https://github.com/ecylkk/vscode-duplicate-file-copy/releases  
2. Open Extensions panel (`Ctrl+Shift+X`)  
3. `...` → **Install from VSIX...**
```