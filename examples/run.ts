import { readdirSync } from 'node:fs'

const dir = import.meta.dirname
const examples = readdirSync(dir)
  .filter((file) => file.endsWith('.ts') && file !== 'run.ts')
  .map((file) => file.slice(0, -'.ts'.length))

const name = process.argv[2]?.replace(/^-+/, '')

if (!name || !examples.includes(name)) {
  console.error(
    `Usage: npm run example <name>\n\nAvailable examples:\n${examples.map((e) => `  ${e}`).join('\n')}`,
  )
  process.exit(1)
}

await import(`./${name}.ts`)
