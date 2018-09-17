const elements = [ ['website-background', 'color'], ['element-text', 'color'], ['element-border', 'border-color'], [ 'element-background', 'background-color' ], [ 'header', 'color' ] ]

const randomPalette = () => {
  const ri = getRandomInt(0, 255)
  const gi = getRandomInt(0, 255)
  const bi = getRandomInt(0, 255)

  const [ _, s, v ] = rgbToHsv(ri, gi, bi)

  let text = '\n'

  for (let i = 0; i < elements.length; i++) {
    let h = (i + 1) / (elements.length + 1)
    const [ r, g, b ] = hsvToRgb(h, s, v)
    let colorTxt = `rgb(${parseInt(r)}, ${parseInt(g)}, ${parseInt(b)})`
    $(`#color${i + 1}`).css(elements[i][1], colorTxt)
    text += `.${elements[i][0]} { ${elements[i][1]}: ${colorTxt} }\n\n`
  }

  $('#css-rules').text(text)
}

const clearPalette = () => {
  $('#css-rules').text('')

  for (let i = 0; i < elements.length; i++) {
    $(`#color${i + 1}`).css(`color`, `black`)
    $(`#color${i + 1}`).css(`border-color`, `black`)
    $(`#color${i + 1}`).css(`background-color`, `white`)
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}
