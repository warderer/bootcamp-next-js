import { useRouter } from 'next/router'
// https://nextjs.org/docs/routing/dynamic-routes

const PostId = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>Post: {id}</div>
  )
}
export default PostId
