export interface Testimonial {
  id: number
  quote: string
  author: string
  handle: string
  socialIcon: 'facebook' | 'twitter' | 'instagram' | 'youtube'
  cardColor: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    author: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    socialIcon: 'twitter',
    cardColor: '#71719A'
  },
  {
    id: 2,
    quote: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    author: "Mauricio Sanchez",
    handle: "@m741s",
    socialIcon: 'instagram',
    cardColor: '#D9AE89'
  },
  {
    id: 3,
    quote: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    author: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    socialIcon: 'facebook',
    cardColor: '#765070'
  },
  {
    id: 4,
    quote: "Setapp has completely transformed how I work on my Mac. The variety of apps available is incredible and the value is unmatched!",
    author: "Sarah Johnson",
    handle: "@sarahj_mac",
    socialIcon: 'twitter',
    cardColor: '#71719A'
  },
  {
    id: 5,
    quote: "Best investment I've made for my Mac setup. So many productivity apps in one place, it's a game changer!",
    author: "David Chen",
    handle: "@davidchen_tech",
    socialIcon: 'youtube',
    cardColor: '#D9AE89'
  }
]

