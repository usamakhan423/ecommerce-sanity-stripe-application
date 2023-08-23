import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-07-05',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);