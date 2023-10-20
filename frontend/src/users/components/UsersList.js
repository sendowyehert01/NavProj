import UserItem from './UserItem';

function UsersList({ items }) {
      { if (items.length === 0) {
        return <h1> No Users Found </h1>
      }
        return (
          <div>
            <ul>
              { items.map((item) => {
                return <UserItem 
                key = { item.id }
                id = { item.id }
                image = { item.image }
                name = { item.name }
                placeCount = { item.places }
                />
              })}
            </ul>
          </div>
          )
      }
}

export default UsersList;