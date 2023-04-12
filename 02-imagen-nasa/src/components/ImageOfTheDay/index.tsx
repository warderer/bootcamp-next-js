import { Image as ImageTypes } from '@/types'
import Image from 'next/image'
import Router from 'next/router'
import styles from './ImageOfTheDay.module.css'

const ImageOfTheDay = ({ url, title, date }: ImageTypes) => {
  return (
    <div className={styles.container}>
      <Image
        src={url || ''}
        alt={title || ''}
        onClick={() => Router.push(`image/${date}`)}
        // width={200}
        // height={200}
        fill
        className={styles.image}
      />
      <h2>{title}</h2>
    </div>
  )
}
export default ImageOfTheDay
