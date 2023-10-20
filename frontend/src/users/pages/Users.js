import UsersList from '../components/UsersList';

function Users() {
  const USERS = [
    { id: 'u1', name: 'Sendo Galang', places: 3, image: ''},
    { id: 'u2', name: 'Jeffel Sigaw', places: 1, image: ''}
    ]
  
  return (
    <UsersList items={USERS} />
  )
}

export default Users