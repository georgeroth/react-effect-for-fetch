import UsersListItem from "./UsersListItem"

export default function UsersList({usersList}) {
    return (
        <section>
        <h2>Users Section</h2>
        <div className="scroll-container">
          <ul className="users-list">
            {usersList.map((user, index) => {
                let backgroundColor = ""
    
                if (user.gender === "female") {
                    backgroundColor = "bg-pink"
                    } else {
                    backgroundColor = "bg-blue"
                    }
                
                return (
                <UsersListItem user={user} index={index} backgroundColor={backgroundColor}/>
                )
            })}
            
          </ul>
        </div>
      </section>

    )
}