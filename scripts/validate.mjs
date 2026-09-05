import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const readJson = (rel) => JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8'));
const manifest = readJson('assets/manifest.json');
const tokens = readJson('tokens/brand.json');

const required = [manifest.assets.mark.path, manifest.assets.horizontal.path, manifest.tokens.json, manifest.tokens.css];
for (const rel of required) {
  if (!fs.existsSync(path.join(root, rel))) throw new Error(`Falta asset requerido: ${rel}`);
}

for (const rel of [manifest.assets.mark.path, manifest.assets.horizontal.path]) {
  const svg = fs.readFileSync(path.join(root, rel), 'utf8');
  if (!svg.includes('<svg') || !svg.includes('</svg>')) throw new Error(`SVG inválido: ${rel}`);
}

const css = fs.readFileSync(path.join(root, 'tokens/brand.css'), 'utf8').toUpperCase();
for (const [name, hex] of Object.entries(tokens.colors)) {
  if (!/^#[0-9A-F]{6}$/i.test(hex)) throw new Error(`Color inválido ${name}: ${hex}`);
  if (!css.includes(hex.toUpperCase())) throw new Error(`Token ${name} no coincide entre JSON y CSS`);
}

console.log(`Branding ${manifest.version}: validación PASS`);
