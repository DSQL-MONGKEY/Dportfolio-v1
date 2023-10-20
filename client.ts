import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"


export const client = createClient({
   projectId: '',
   dataset: 'production',
   useCdn: true,
   apiVersion: '2023-10-20',
   token: 'skmogMr6dvQ97RYNZYyD2S1WCaoITLk9uODAQt43x25SKfVCEyJKgXp4veaQZ5Fg8I4vzrl5sFFNbfmc2zAVVY9Jimpajq47cFgEQ6OjBeWGcoVYZOeAVuGKVNdJD2jBCGMir3r8jthj4hyrKiV1pi1UXDGDeFQXIzsa1sduQ2q2CLhqqilL'
})