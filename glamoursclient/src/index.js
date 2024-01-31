import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { persistStore } from 'redux-persist';
import { MainStore } from './ReduxWork/Mainstore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(MainStore)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={MainStore}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();