const UserList = ({ users }: any) => {
  console.log(users)
  return (
    <div>UserList</div>
  )
}
// getStaticProps sirve para obtener los datos de la API de forma estática por lo que no se va a volver a ejecutar cada vez que se haga una petición
export async function getStaticProps () {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    console.log(users)
    return {
      props: {
        users
      }
    }
  } catch (error) {
    console.log(error)
    return {}
  }
}

export default UserList
