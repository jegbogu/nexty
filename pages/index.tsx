// pages/index.tsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from '../store/reducers/userReducer';
import { RootState, AppDispatch } from '../store/store';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default Counter;
