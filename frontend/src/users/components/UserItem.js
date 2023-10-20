function UserItem( {id, name, placeCount, image} ) {
  return (
    <li>
      <div>
        <div>
          <img src={image} alt={name}/>
        </div>
        <div>
          <h2> { name } </h2>
          <h3> { placeCount } { placeCount === 1 ? 'Place' : 'Places' }</h3>
        </div>
      </div>
    </li>
    )
}

export default UserItem;