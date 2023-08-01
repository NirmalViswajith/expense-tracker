import { useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};
  const increment = () => {
    dispatch({type: 'increment'});
  }
  const decrement = () => {
    dispatch({type: 'decrement'})
  }
  const incrementby5 = () => {
    dispatch({type: 'INCREMENTBY5'})
  }
  const decrementby5 = () => {
    dispatch({type: 'DECREMENTBY5'});
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={incrementby5}>incrementBy5</button>
        <button onClick={decrementby5}>decrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
