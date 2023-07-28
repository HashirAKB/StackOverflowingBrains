import React from 'react';
import Counter from './StateAndProps';

function App() {
  const initialCount = 5;
  return (
    <div>
      <h1>Counter App</h1>
      <Counter initialCount={initialCount} />
    </div>
  );
}

export default App;
