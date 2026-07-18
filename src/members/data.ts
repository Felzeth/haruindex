export type MemberSocial = { name: string; url: string }
export type Member = { slug: string; name: string; role: string; bio: string; socials: MemberSocial[] }
export const members: Member[] = [
  { 
    slug: 'felzeth', 
    name: 'Felzeth', 
    role: 'Founder', 
    bio: 'Hello.', 
    socials: [{ name: 'GitHub', url: 'https://github.com/Felzeth' }, { name: 'X / Twitter', url: 'https://x.com/Felzeth' }] 
  },
  { 
    slug: 'axon', 
    name: 'Axon', 
    role: 'Member', 
    bio: 'I\'m Associated in this team.', 
    socials: [{ name: 'X / Twitter', url: 'https://x.com/Terrenxels' }] 
  },
  { 
    slug: 'panaz', 
    name: 'Panaz', 
    role: 'Member', 
    bio: 'No Bio yet.',
    socials: []
  },
  { 
    slug: 'satan', 
    name: 'Satan', 
    role: 'Member', 
    bio: 'No Bio yet.', 
    socials: [] 
  },
  { 
    slug: 'rek', 
    name: 'Rek', 
    role: 'Member', 
    bio: 'Most helpfull member in the team', 
    socials: [{ name: 'Instagram', url: 'https://www.instagram.com/thndon_jj02/' }] 
  },
]
