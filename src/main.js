function generateSnow () {
  const snowContainer = document.querySelector('#snow-container')
  const snowImg = document.createElement('img')
  snowImg.src = './snowflake.svg'
  snowImg.setAttribute('viewBox', '0 0 100 100')

  const snowWidth = calcSnowWidth()
  snowImg.setAttribute('width', snowWidth)
  snowImg.setAttribute('height', snowWidth)

  if (snowWidth <= 10) {
    snowImg.setAttribute('class', 'snowSmall')
  } else {
    snowImg.setAttribute('class', 'snowBig')
  }

  const snowPosition = Math.random() * window.innerWidth
  snowImg.setAttribute('style', `left: ${snowPosition}px;`)

  if (snowContainer.childElementCount > 100) {
    snowContainer.firstChild.remove()
  }
  snowContainer.appendChild(snowImg)
}

function calcSnowWidth () {
  const SnowWidth = Math.random() * 20
  if (SnowWidth < 7) {
    return calcSnowWidth()
  }
  return SnowWidth
}

function moveSnow () {
  const snowImg = document.querySelectorAll('img')

  snowImg.forEach((element) => {
    let xAxis = element.style.left.split('px')
    xAxis = parseFloat(xAxis) + 0.2
    element.style.left = xAxis + 'px'
  })
}

setInterval(generateSnow, 100)
setInterval(moveSnow, 8)
