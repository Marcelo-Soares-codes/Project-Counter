import p from 'prop-types';
import { useReducer, useRef } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { reducer } from './reducer';
import { buildActions } from './build-action';

export const inicialState = {
  counter: 0,
  loading: false,
};

const Context = createContext();

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inicialState);
  const actions = useRef(buildActions(dispatch));

  return <Context.Provider value={[state, actions]}>{children}</Context.Provider>;
};

CounterContextProvider.propTypes = {
  children: p.node.isRequired,
};

export const useConterContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error('You have to use useConterContext inside <>');
  }

  return [...context];
};
