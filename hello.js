function convertBinary(dec) {
  let binary = ''
  while (dec !== 0) {
    let temp = Math.floor(dec / 2)
    binary = `${Math.floor(dec % 2)}${binary}`
    dec = temp
  }
  binary = binary.split('0')

  return binary.sort()[binary.length -1].length
}

console.log(convertBinary(500009090))