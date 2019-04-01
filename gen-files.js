#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')

const numberOfFiles = process.argv.length > 2 ? parseInt(process.argv[2]) : 1
console.log(`Generating ${numberOfFiles} file(s).. in ./src/server/`)
execSync('rm ./src/server/foo-*.ts')
for (let i = 1; i <= numberOfFiles; i++) {
  let contents
  if (i === numberOfFiles) {
    contents = `export interface Foo${i} { foo${i}: number }\nexport default 0\n`
  } else {
    contents = ''
    for (let j = i + 1; j <= Math.min(numberOfFiles, i + 10); j++) {
      contents += `import foo${j}, { Foo${j} } from './foo-${j}'\n`
    }
    contents += '\n'
    contents += `const foo = 1`
    for (let j = i + 1; j <= Math.min(numberOfFiles, i + 10); j++) {
      contents += ` + foo${j}`
    }
    contents += '\n'
    contents += `export type Foo${i} =\n`
    for (let j = i + 1; j <= Math.min(numberOfFiles, i + 10); j++) {
      contents += `  & Foo${j}\n`
    }
    contents += `  & { foo${i}: number }`
    contents += '\n'
    contents += 'export default foo\n'
  }
  fs.writeFileSync(`src/server/foo-${i}.ts`, contents)
}
