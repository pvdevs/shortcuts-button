import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import { Button } from './components/Button/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="content-container">
      <Button />
    </div>
  );
}

export default App;
