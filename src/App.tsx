import { useState } from 'react';

import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';

const App = () => {
  const items = ['New York', 'San Fracisco', 'Tokyo', 'London', 'Paris'];
  const [alertVisible, setAlertVisible] = useState(false);

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

      {/* Dismissable alerts */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>My Button</Button>
    </div>
  );
};

export default App;
