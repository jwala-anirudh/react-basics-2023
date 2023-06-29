import Alert from './components/Alert';
import ListGroup from './components/ListGroup';

function App() {
  const items = ['New York', 'San Fracisco', 'Tokyo', 'London', 'Paris'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {/* Alert component that accepts children dynamically */}
      <Alert>
        Hello <span className="fw-bold">World</span>!
      </Alert>
      {/* List group with rendering lists, conditional rendering, state, props and child-to-parent communication */}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
