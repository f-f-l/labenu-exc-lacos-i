const maioresPaises = ['Rússia', 'Canadá', 'China', 'EUA', 'Brasil']

function organizarRank() {
  for (i = 0; i < maioresPaises.length; i++) {
    console.log(`${i + 1} - ${maioresPaises[i]}`)
  }
}

organizarRank()
