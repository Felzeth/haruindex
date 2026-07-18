export type Project = {
  name: string
  url: string
  description: string
}

export const projects: Project[] = [
  {
    name: 'CR-DL',
    url: 'https://github.com/Felzeth/crdl',
    description: 'Tools that make downloading media much more easier.',
  },
  {
    name: 'web index',
    url: 'https://github.com/Felzeth/haruindex',
    description: 'The name say it.',
  },
  {
    name: 'anihook',
    url: 'https://github.com/Felzeth/anihook',
    description: 'Tools that auto announce new anime releases.',
  },
]
