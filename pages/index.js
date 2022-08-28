import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [count, setCount] = useState(10);

  return (
    <div className="App">
      <h1 className="fixed">(1 - (1/n)) </h1>

      <div className="input">
        <input
          type="number"
          onChange={(e) => {
            setCount(Number(e.target.value));
          }}
          value={count}
        />
      </div>

      {count > 0 && (
        <div className="grid">
          {new Array(count - 1).fill(null).map((el, i) => (
            <div key={i}>
              {new Array(i + 2).fill(null).map((el_, i_) => (
                <div key={i_}>
                  {new Array(i + 3).fill(null).map((el__, i__) => (
                    <div key={i__}></div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
