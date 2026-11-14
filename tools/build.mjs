import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
await rm(root + 'dist', {recursive:true, force:true});
await mkdir(root + 'dist', {recursive:true});
for (const name of ['index.html','slides.html','assets','README.md','PROGRAMME.md','SOURCES.md']) await cp(root + name, root + 'dist/' + name, {recursive:true});
console.log('Built static site in dist');
