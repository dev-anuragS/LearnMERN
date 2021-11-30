const fs = require("fs");
let text=fs.readFileSync(`C:\\WEB DEVELOPMENT\\learn node.js\\textread.txt`,"utf-8");
console.log(text);
text=text.replace("hey","bae");
fs.writeFileSync("learn node.js\\textwrite.txt",text);