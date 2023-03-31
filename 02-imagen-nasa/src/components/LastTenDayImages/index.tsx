import { Image } from '@/types'

type LastTenDaysImagesProps = {
    images: Image[]
}

const LastTenDayImages = ({ images }: LastTenDaysImagesProps) => {
  return (
    <div>
      <h2>Últimos 10 días</h2>
      {images?.map((image, index) =>
        <div key={index}>
          <img src={image.url} alt={image.title} />
          <h2>{image.title}</h2>
        </div>
      )}
    </div>
  )
}

export default LastTenDayImages
