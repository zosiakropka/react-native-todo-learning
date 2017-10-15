import randomItemInArray from 'random-item-in-array'

const ALL_BACKGROUNDS = [
  require('./img/china.jpeg'),
  require('./img/japan.jpeg'),
  require('./img/rain.jpeg'),
  require('./img/winter.jpeg'),
  require('./img/elephant.jpeg'),
  require('./img/lake.jpeg'),
  require('./img/seagull.jpeg'),
  require('./img/hipster.jpeg'),
  require('./img/mantis.jpeg'),
  require('./img/surfing.jpeg'),
  require('./img/horses.jpeg'),
  require('./img/mountain.jpeg'),
  require('./img/venice.jpeg')
]

function getRandomImageSource () {
  return randomItemInArray(ALL_BACKGROUNDS)
}

export default getRandomImageSource
