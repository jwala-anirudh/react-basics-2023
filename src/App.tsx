import { useState } from 'react';

import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';
import ExpandableText from './components/ExpandableText';
import Form from './components/Form';
import ExpenseList, { Expense } from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';
import categories from './expense-tracker/categories';

const App = () => {
  const items = ['New York', 'San Fracisco', 'Tokyo', 'London', 'Paris'];
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const visibleExpenses = selectedCategory
    ? expenses.filter(e => e.category === selectedCategory)
    : expenses;

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

      {/* Expand-able text */}
      <ExpandableText maxChars={90}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
        obcaecati quibusdam suscipit. Nostrum iure ratione provident, architecto
        autem aliquam vero in ipsam voluptatem nisi exercitationem quos labore
        voluptates impedit veniam. Quia officia fugit porro iure earum nostrum,
        odio molestiae saepe aspernatur laboriosam consequuntur odit unde sit
        quidem sint, vitae neque temporibus dolorem reprehenderit placeat
        assumenda incidunt ipsum quos! Voluptas totam ipsam quae possimus
        tenetur enim unde ratione nam ex facere dolore doloremque, dicta nostrum
        repellendus molestiae ipsum. Repellat est natus eum inventore quisquam,
        rerum explicabo exercitationem quis dolores officia! Ipsa odit veritatis
        ducimus debitis! Possimus quo sapiente cupiditate accusamus facere?
      </ExpandableText>

      <Form />

      <div className="mb-5 mt-3">
        <ExpenseForm
          onSubmit={expense =>
            setExpenses([
              ...expenses,
              {
                ...expense,
                id: expenses.length + 1
              }
            ])
          }
        />
      </div>
      <div className="mt-3 mb-3">
        <ExpenseFilter
          onSelectCategory={category => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={id => setExpenses(expenses.filter(e => e.id !== id))}
      />
    </div>
  );
};

export default App;
