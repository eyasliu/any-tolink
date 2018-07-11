import {LZMA} from 'lzma/src/lzma.js'

const codeMap = {}

const pad = (code, length) => {
  if(code.length < length) {
    return new Array(length - code.length).fill(0).join('') + code
  }
  return code
}

const codeStr = '0123456789abcdefghijklmnopqrstuv'
for(let i = 0; i < codeStr.length; i++) {
  codeMap[codeStr[i]] = pad(i.toString(2), 5)
}
console.log(LZMA)

// const strToBin = str => {
//   const strarr = [...str]
//   return strarr.map(s => s.charCodeAt().toString(2)).join('')
// }

export default {
  encode(str) {
    return new Promise(resolve => {
      LZMA.compress(str, res => {
        console.log(res)
        resolve(res)
      })

    })
  }
}