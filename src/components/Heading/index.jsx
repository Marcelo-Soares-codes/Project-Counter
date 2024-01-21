import { useConterContext } from '../../contexts/CounterContext';
import './style.css';

export const Heading = () => {
  const [state, actions] = useConterContext();
  return <h1 className="textCounter">Counter: {state.counter}</h1>;
};
