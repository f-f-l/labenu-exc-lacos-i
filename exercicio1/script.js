const msg = 'Gostaria de pedir uma coxinha?'

function fazerPedido() {
  let conta = 0

  while (true) {
    conta += 2.5
    pedido = prompt(msg).toUpperCase()
    console.log(`Você digitou: '${pedido}'`)

    console.log(
      `O seu valor atual na conta é: R$${conta.toFixed(2).replace('.', ',')}`
    )

    if (pedido !== 'S' && pedido !== 'N') {
      alert(`Digite 'S' ou 'N'`)
      continue
    }

    if (pedido === 'N') {
      console.log(
        `O valor total da conta é: R$${conta.toFixed(2).replace('.', ',')}`
      )
      break
    }
  }
}

fazerPedido()
