import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  sumAndSmite,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';
import { store } from '../../app/store';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [sum1Amount, setSum1Amount] = useState("0");
  const [sum2Amount, setSum2Amount] = useState("0");
  const incrementValue = Number(incrementAmount) || 0;

  const sumValue = Number(sum1Amount) + Number(sum2Amount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => setSum1Amount(store.getState().counter.value)}
        >
          Carga contador  
        </button>
        <input
            className={styles.textbox}
            aria-label="Sumador 1"
            value={sum1Amount}
            onChange={(e) => setSum1Amount(e.target.value)}
          />
          <p>+</p>
          <input
            className={styles.textbox}
            aria-label="Sumador 2"
            value={sum2Amount}
            onChange={(e) => setSum2Amount(e.target.value)}
          />
          <button
          className={styles.button}
          onClick={() => dispatch(sumAndSmite(sumValue))}
        >
          Suma y Machaca
        </button>
      </div>
        
    </div>
  );
}
