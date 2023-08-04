import { useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { counterAction } from './store';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();
  const show = useSelector(state => state.counter.showCounter)
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle())
  };
  const increment = () => {
    dispatch(counterAction.increment());
  }
  const decrement = () => {
    dispatch(counterAction.decrement())
  }
  const incrementby5 = () => {
    dispatch(counterAction.increase(5))
  }
  const decrementby5 = () => {
    dispatch(counterAction.decrease(5));
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
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
