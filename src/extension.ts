import * as vscode from 'vscode';
import * as path from 'path';

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

    context.subscriptions.push(disposable);
}

export function deactivate() {}