export const availableWords = [
  'mount', 'power', 'north', 'month', 'think',
  'kings', 'drink', 'marks', 'sport', 'bread',
  'drive', 'pride', 'grand', 'great', 'light',
  'moist', 'pears', 'found', 'beard', 'phone',
  'mixed', 'crowd', 'proud', 'spear', 'drone',
  'grape', 'thing', 'model', 'fresh', 'first',
  'stand', 'print', 'drain', 'panel', 'round',
  'basic', 'spicy', 'thumb', 'world', 'smart',
  'radio', 'store', 'solve', 'speak', 'vital',
  'rhino', 'trace', 'peach', 'solar', 'point',
  'sugar', 'frame', 'pause', 'shake', 'other',
  'watch', 'today', 'focus', 'movie', 'royal',
  'flair', 'plant', 'olive', 'story', 'train',
  'badge', 'metal', 'gamer', 'money', 'album',
  'depth', 'float', 'input', 'field', 'voice',
  'night', 'prize', 'enjoy', 'valid', 'equal',
  'dream', 'baker', 'count', 'study', 'lunch',
  'quick', 'honey', 'price', 'grace', 'cream',
  'reply', 'heart', 'diner', 'smile', 'build',
  'write', 'slide', 'union', 'lucky', 'house',
  'place', 'index', 'juicy', 'stage', 'clean',
  'ridge', 'vowel', 'thank', 'track', 'range',
  'brain', 'candy', 'layer', 'fluid', 'score',
  'sound', 'ocean', 'solid', 'relax', 'laugh',
  'earth', 'brave', 'guest', 'child', 'share',
  'pearl', 'large', 'plane', 'crown', 'beach',
  'trade', 'roast', 'party', 'touch', 'ready',
  'bonus', 'young', 'shape', 'short', 'space',
  'logic', 'towel', 'value', 'route', 'sharp',
  'pixel', 'audio', 'topic', 'tower', 'music'
]

export const defaultWords = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', '']
]

export const defaultColors = [
  ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white'],
  ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white'],
  ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white'],
  ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white'],
  ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white'],
  ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white']
]

export const getRandomWord = words => words[Math.floor(Math.random() * words.length)]

export const insertLetter = (letter, word) => {
  const availablePosition = word.indexOf('')
  word[availablePosition] = letter
  return word
}

export const deleteLastLetter = word => {
  if (!word.includes('')) {
    word[word.length - 1] = ''
    return word
  }

  const availablePosition = word.indexOf('')
  word[availablePosition - 1] = ''
  return word
}

export const colorize = (word, targetWord) => word.map((v, i) => {
  if (v === targetWord[i]) return 'bg-success'
  if (v !== targetWord[i] && targetWord.includes(v)) return 'bg-warning'
  return 'bg-secondary'
})