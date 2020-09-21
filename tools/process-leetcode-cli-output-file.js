const fs = require("fs")
const path = require("path")
const glob = require("glob")
const { execSync } = require("child_process")

const dir = `src/leetcode`;

const id = process.argv.slice(2)[0];

if (!id) {
  console.error("Specify leetcode id")
  process.exit()
}

// Fetch
const res = execSync(`leetcode show -g -l javascript -x -o ${dir} ${id}`)

if (!res.toString().startsWith(`[${id}]`)) {
  console.error("Fetching went wrong, exiting…")
  process.exit()
}

// Adjust file
const filenames = glob.sync(`${dir}/${id}*.js`)
if (filenames.length !== 1) {
  console.error("There's not *just one* of downloaded source check, check manually, exiting…")
  process.exit()
}
const filename = filenames[0]
const original = fs.readFileSync(filename, "utf-8")
const funcName = original.match(/var (\w+) = function/)[1]
const modified = modify(original) + `\nif (module.parent) module.exports = [ ${funcName} ];`
fs.writeFileSync(filename.replace(".js", ".js"), modified)

// Create test
fs.writeFileSync(
  filename.replace(".js", ".test.js"),
  fs.readFileSync("./tools/test-template.js", "utf-8").replace(/NAME/g, path.basename(filename).replace(".js", ""))
)

function modify(input) {
  // :see-no-evil: it works, do not ever touch this! I've warned you!
  return input
    .replace(/ \*\//g, "*/")
    .replace(/^ \* @lc .+/m, '\n')
    .replace(/^ \* ?/gm, '')
    .replace(/\n\n\n/g, '\n\n')
    .replace(/^\/\*\n\n/g, '/*')
    .replace(/\/\*\*/g, '\n/**')
    .replace(/Example \d\:\n\n/g, 'Example:\n')
    .replace(/Constraints\:\n\n/g, 'Constraints:\n')
    .replace(/\n\n\n/g, '\n\n')
    .replace(/\n\n\n/g, '\n\n')
    .replace(/ /g, ' ') // nbsp to space
}
