import { useRouter } from 'next/router'

const ImageDate = () => {
  const router = useRouter()
  const { date } = router.query

  console.log(date)
  return (
    <div>Image Date</div>
  )
}
export default ImageDate
