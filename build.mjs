import { mkdir, copyFile, rm } from 'node:fs/promises';

// Собираем папку для публикации. Копируем строго перечисленное —
// так секреты и серверные файлы физически не могут попасть на хостинг.
const ASSETS = ['index.html', 'hero.jpg'];

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });

for (const file of ASSETS) {
    await copyFile(file, `dist/${file}`);
    console.log(`+ ${file}`);
}

console.log(`Готово: ${ASSETS.length} файла в dist/`);
