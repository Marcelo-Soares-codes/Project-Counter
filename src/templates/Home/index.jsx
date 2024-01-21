import './style.css';

import { useEffect, useState } from 'react';
import { useConterContext } from '../../contexts/CounterContext';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Heading } from '../../components/Heading';

function Home() {
  const [state, actions] = useConterContext();
  const [inputValue, setInputValue] = useState('');

  const handleValueCounter = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <div className="container">
      <Heading />
      <div className="containerSetValue">
        <Input valueInput={handleValueCounter} />
        <Button
          onClickButton={() => {
            actions.current.setCounter({ counter: inputValue });
          }}
        >
          Set
        </Button>
      </div>
      <br />
      <Button
        onClickButton={() => {
          actions.current.increase();
        }}
      >
        Increase
      </Button>
      <Button
        onClickButton={() => {
          actions.current.decrease();
        }}
      >
        Decrease
      </Button>
      <Button
        onClickButton={() => {
          actions.current.reset();
        }}
      >
        Reset
      </Button>
      <br />
      <Button
        onClickButton={() => {
          actions.current.asyncIncreaseStart();
        }}
      >
        Async Increase
      </Button>
      <Button
        onClickButton={() => {
          actions.current.asyncIncreaseError();
        }}
      >
        Async Increase
      </Button>
    </div>
  );
}

export default Home;
