import Alert from './components/Alert';
import Button from './components/Button';
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
      {/* Button component */}
      <Button onClick={() => console.log('Clicked')}>My Primary Button</Button>
      <Button color="secondary" onClick={() => console.log('Clicked')}>
        My Secondary Button
      </Button>
      {/* Gives compilation error by typescript for passing invalid color
      <Button color="anirudh" onClick={() => console.log('Clicked')}>
        My Invalid Color Button
      </Button> */}
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
