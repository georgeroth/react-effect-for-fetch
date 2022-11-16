import { useEffect, useState } from "react"

function UsersSection() {
  const [usersList, setUsersList] = useState([])
  let backgroundColor = ""

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=10`)
      .then((res) => res.json())
      .then((data) => setUsersList(data.results))
  }, [])

  console.log(usersList)

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul class="users-list">
          {usersList.map((user, index) => {

            if (user.gender === "female") {
              backgroundColor = "bg-pink"
            } else {
              backgroundColor = "bg-blue"
            }

            return (
              
              <li className={backgroundColor} key={index}>
                <img
                  src={user.picture.medium}
                  alt={`${user.name.first} ${user.name.last}`}
                />
                <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
                <p>Email: {user.email}</p>
              </li>
            )
          })}
          
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
