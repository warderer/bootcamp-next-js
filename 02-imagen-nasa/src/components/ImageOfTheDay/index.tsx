import { Image } from '@/types'
import Router from 'next/router'

const ImageOfTheDay = ({ url, title, date }: Image) => {
  return (
    <div>
      <img src={url} alt={title} onClick={() => Router.push(`image/${date}`)} />
      <h2>{title}</h2>
    </div>
  )
}
export default ImageOfTheDay
