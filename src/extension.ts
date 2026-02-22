import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
    // 注册我们在 package.json 中定义的命令
    let disposable = vscode.commands.registerCommand('duplicate-file-copy.makeCopy', async (uri: vscode.Uri) => {
        // 如果没有获取到 uri (例如不是通过右键点击触发的)，则给出提示
        if (!uri) {
            vscode.window.showErrorMessage('请在左侧文件树中右键点击文件或文件夹使用此功能！');
            return;
        }

        // 获取原文件/文件夹的路径
        const sourcePath = uri.fsPath;
        // 解析路径，分离出目录、文件名、扩展名
        const parsedPath = path.parse(sourcePath);

        // 生成新名字：如果是 test.txt -> test-副本.txt；如果是 folder -> folder-副本
        const newName = `${parsedPath.name}-副本${parsedPath.ext}`;
        // 拼接成完整的目标 URI
        const targetUri = vscode.Uri.file(path.join(parsedPath.dir, newName));

        try {
            // 使用 VS Code 内置的 fs API 进行复制（完美支持文件和文件夹，无需额外依赖）
            // { overwrite: false } 保证如果已经存在“-副本”，不会意外覆盖，而是会报错提示
            await vscode.workspace.fs.copy(uri, targetUri, { overwrite: false });
            vscode.window.showInformationMessage(`✅ 成功创建: ${newName}`);
        } catch (error) {
            vscode.window.showErrorMessage(`❌ 创建副本失败 (可能已存在同名副本): ${error}`);
        }
    });

    let openGitBashDisposable = vscode.commands.registerCommand('duplicate-file-copy.openGitBash', async (uri: vscode.Uri) => {
        if (!uri) {
            vscode.window.showErrorMessage('请在左侧文件树中右键点击文件或文件夹使用此功能！');
            return;
        }

        const targetPath = uri.fsPath;
        let cwd = targetPath;
        try {
            const stat = await vscode.workspace.fs.stat(uri);
            if ((stat.type & vscode.FileType.Directory) === 0) {
                // 如果是文件，使用其所在的文件夹
                cwd = path.dirname(targetPath);
            }
        } catch (error) {
            cwd = path.dirname(targetPath);
        }

        // 默认常见的 Git Bash 安装路径
        const gitBashPaths = [
            'C:\\Program Files\\Git\\bin\\bash.exe',
            'C:\\Program Files\\Git\\git-bash.exe',
            'D:\\Program Files\\Git\\bin\\bash.exe',
            'D:\\Program Files\\Git\\git-bash.exe',
            'E:\\Program Files\\Git\\bin\\bash.exe',
            'E:\\Program Files\\Git\\git-bash.exe'
        ];

        let shellPath: string | undefined;
        for (const p of gitBashPaths) {
            if (fs.existsSync(p)) {
                shellPath = p;
                break;
            }
        }

        if (!shellPath) {
            vscode.window.showErrorMessage('未能在默认路径(C/D/E盘)找到 Git Bash，请确保已安装 Git。如果确实安装，可能是其位置不支持。');
            return;
        }

        // 使用 VS Code 内部终端打开 Git Bash
        const terminal = vscode.window.createTerminal({
            name: 'Git Bash',
            cwd: cwd,
            shellPath: shellPath,
            shellArgs: ['--login', '-i']
        });
        terminal.show();
    });

    context.subscriptions.push(disposable, openGitBashDisposable);
}

export function deactivate() { }