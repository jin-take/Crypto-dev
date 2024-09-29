import * as fs from 'fs';
import * as path from 'path';

// 引数からフォルダ名を取得
const args = process.argv.slice(2);
if (args.length < 1) {
    console.error('Please provide a folder name.');
    process.exit(1);
}
const folderName = args[0];

const templateDir = path.join(__dirname);

const newDir = path.join(templateDir, '..', folderName);

// フォルダのコピー関数
function copyDir(src: string, dest: string): void {
    fs.mkdirSync(dest, { recursive: true });
    const items = fs.readdirSync(src, { withFileTypes: true });
    for (const item of items) {
        const srcPath = path.join(src, item.name);
        const destPath = path.join(dest, item.name);
        fs.copyFileSync(srcPath, destPath);
    }
}

copyDir(templateDir, newDir);

const packageJsonPath = path.join(newDir, 'package.json');
if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    packageJson.name = folderName;
    packageJson.description = `${folderName}-dev`;

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

console.log(`Folder '${folderName}' created successfully.`);
