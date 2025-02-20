const BackspaceIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-backspace' viewBox='0 0 16 16'>
    <path d='M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z' />
    <path d='M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z' />
  </svg>
)

const EnterIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-arrow-return-left' viewBox='0 0 16 16'>
    <path fillRule='evenodd' d='M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z' />
  </svg>
)

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