import { BackspaceIcon, EnterIcon } from './Icons'

export const defaultKeyColors = {
  q: 'bg-transparent', w: 'bg-transparent', e: 'bg-transparent', r: 'bg-transparent', t: 'bg-transparent', y: 'bg-transparent', u: 'bg-transparent', i: 'bg-transparent', o: 'bg-transparent', p: 'bg-transparent',
  a: 'bg-transparent', s: 'bg-transparent', d: 'bg-transparent', f: 'bg-transparent', g: 'bg-transparent', h: 'bg-transparent', j: 'bg-transparent', k: 'bg-transparent', l: 'bg-transparent',
  z: 'bg-transparent', x: 'bg-transparent', c: 'bg-transparent', v: 'bg-transparent', b: 'bg-transparent', n: 'bg-transparent', m: 'bg-transparent'
}

export const keys = [
  [
    { key: 'q', keyCode: 81 },
    { key: 'w', keyCode: 87 },
    { key: 'e', keyCode: 69 },
    { key: 'r', keyCode: 82 },
    { key: 't', keyCode: 84 },
    { key: 'y', keyCode: 89 },
    { key: 'u', keyCode: 85 },
    { key: 'i', keyCode: 73 },
    { key: 'o', keyCode: 79 },
    { key: 'p', keyCode: 80 }
  ],
  [
    { key: 'a', keyCode: 65 },
    { key: 's', keyCode: 83 },
    { key: 'd', keyCode: 68 },
    { key: 'f', keyCode: 70 },
    { key: 'g', keyCode: 71 },
    { key: 'h', keyCode: 72 },
    { key: 'j', keyCode: 74 },
    { key: 'k', keyCode: 75 },
    { key: 'l', keyCode: 76 }
  ],
  [
    { key: 'Enter', keyCode: 13, icon: <EnterIcon /> },
    { key: 'z', keyCode: 90 },
    { key: 'x', keyCode: 88 },
    { key: 'c', keyCode: 67 },
    { key: 'v', keyCode: 86 },
    { key: 'b', keyCode: 66 },
    { key: 'n', keyCode: 78 },
    { key: 'm', keyCode: 77 },
    { key: 'Backspace', keyCode: 8, icon: <BackspaceIcon /> }
  ]
]