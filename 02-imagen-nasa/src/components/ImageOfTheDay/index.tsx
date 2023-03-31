import { Image } from '@/types'

const ImageOfTheDay = ({ url, title }: Image) => {
  return (
    <div>
      <img src={url} alt={title} />
      <h2>{title}</h2>
    </div>
  )
}
export default ImageOfTheDay
