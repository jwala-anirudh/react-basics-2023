function ListGroup() {
  let items = ['New York', 'San Fracisco', 'Tokyo', 'London', 'Paris'];
  items = [];

  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {/* Choice 1 :: items.length === 0 ? <p>No items found</p> : null */}
      {/* Choice 2 :: items.length === 0 && <p>No items found</p> */}
      {/* Choice 3 :: */ getMessage()}
      <ul className="list-group">
        {items.map(item => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
