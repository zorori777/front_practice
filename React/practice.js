const fs = require('fs')
// promise
// function readFile_pr (fname) {
//   return new Promise ((resolve) => {
//     fs.readFile(fname, 'utf-8', (err, s) => {
//       resolve(s)
//     })
//   })
// }

// readFile_pr('a.text')
// .then((text) => {
//   console.log('a.textを読みました', text)
//   return readFile_pr('b.text')
// })
// .then((text) => {
//   console.log('b.textを読みました', text)
//   return readFile_pr('c.text')
// })
// .then((text) => {
//   console.log('c.textを読みました')
// })

function readFileEx(fname) {
  return new Promise((resolve, reject) => {
    fs.readFile(fname, 'utf-8', (err, data) => {
      resolve(data)
    })
  })
}

async function readAll () {
  const a = await readFileEx('a.txt')
  console.log(a)
  const b = await readFileEx('b.txt')
  console.log(b)
  const c = await readFileEx('c.txt')
  console.log(c)
}

readAll()
