import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

function UsersSection() {
  const [usersList, setUsersList] = useState([])


  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=10`)
      .then((res) => res.json())
      .then((data) => setUsersList(data.results))
  }, [])

  return (
    <UsersList usersList={usersList}/>
  )
}

export default UsersSection
