import randomItemInArray from 'random-item-in-array'

const ALL_BACKGROUNDS = [
  require('./img/china.jpeg'),
  require('./img/mountain.jpeg'),
  require('./img/surfing.jpeg'),
  require('./img/mantis.jpeg'),
  require('./img/seagull.jpeg')
]

function getRandomImageSource () {
  return randomItemInArray(ALL_BACKGROUNDS)
}

export default getRandomImageSource
