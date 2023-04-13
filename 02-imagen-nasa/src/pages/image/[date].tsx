import fetcher from '@/utils/fetcher'
import { Image as ImageType } from '@/types'

type ImageDateProps = {
   image: ImageType;
};

type StaticPropsParams = {
    params: any;
};

const ImageDate = ({ image }: ImageDateProps) => {
  return (
    <div>
      <h2>{image.title}</h2>
      <img src={image.url} alt={image.title} />
      <h3>{image.date}</h3>
      <p>{image.explanation}</p>
    </div>
  )
}

export async function getStaticProps ({ params }: StaticPropsParams) {
  const { date } = params

  try {
    const image = await fetcher(`&date=${date}`)
    return {
      props: {
        image
      }
    }
  } catch (error) {
    console.error(error)
  }
}

/* If a page has Dynamic Routes and uses getStaticProps, it needs to define a list of paths to be statically generated.

When you export a function called getStaticPaths (Static Site Generation) from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by getStaticPaths.
*/
export async function getStaticPaths () {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default ImageDate
