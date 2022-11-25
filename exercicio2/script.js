const msg = 'Digite um número:'

function tabuada() {
  const num = prompt(msg)
  for (i = 1; i <= 10; i++) {
    console.log(`${num}x${i} = ${num * i}`)
  }
}

tabuada()
