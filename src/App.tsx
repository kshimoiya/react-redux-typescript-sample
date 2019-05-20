import React from 'react';
import {Provider} from 'react-redux';

import './App.css';
import store from './store';
import TodoContainer from './TodoContainer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TodoContainer/>
    </Provider>
  );
}

export default App;
