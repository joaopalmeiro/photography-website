import slugify from 'slugify'

function m (month: number): number {
  return month - 1
}

interface Photo {
  src: string;
  location: string;
  date: Date;
}

interface Collection {
  name: string;
  photos: Photo[];
}

const collections: Collection[] = [
  {
    name: 'Black & Night',
    photos: [
      {
        src: '/_MG_5561-2.jpg',
        location: 'Lisbon, Portugal',
        date: new Date(2023, m(1), 1)
      },
      {
        src: 'https://placehold.co/600x400',
        location: 'Lisbon, Portugal',
        date: new Date(2023, m(1), 1)
      },
      {
        src: 'https://placehold.co/600x400',
        location: 'Lisbon, Portugal',
        date: new Date(2023, m(1), 1)
      },
      {
        src: 'https://placehold.co/1000x4000',
        location: 'Lisbon, Portugal',
        date: new Date(2023, m(1), 1)
      },
      {
        src: 'https://placehold.co/600x400',
        location: 'Lisbon, Portugal',
        date: new Date(2023, m(1), 1)
      },
      {
        src: 'https://placehold.co/600x400',
        location: 'Lisbon, Portugal',
        date: new Date(2023, m(1), 1)
      }
    ]
  }
]

export default {
  name: 'João Palmeiro',
  instagram: 'https://www.instagram.com/joaompalmeiro/',
  collections: collections.map((collection) => {
    const slug = slugify(collection.name, { lower: true })
    const photos = collection.photos.map((photo, index) => {
      const id = index + 1

      return {
        ...photo,
        id
      }
    })

    return { ...collection, slug, photos }
  })
}
