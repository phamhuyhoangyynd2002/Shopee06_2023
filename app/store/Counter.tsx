import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  setID,
  setName,
  setAvatar,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  console.log(count);
  return (  
    <div>
      <div>
        <h1>{count.name}</h1>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          onChange={(e) => dispatch(setName(e.target.value))}
        /> 
      </div>
    </div>
  );
}
