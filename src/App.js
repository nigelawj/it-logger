import React, { Fragment, useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import SearchBar from '../src/components/layout/SearchBar';
import Logs from '../src/components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  useEffect(() => {
    // Initialises Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar></SearchBar>
        <div className="container">
          <AddBtn></AddBtn>
          <AddLogModal></AddLogModal>
          <EditLogModal></EditLogModal>
          <AddTechModal></AddTechModal>
          <TechListModal></TechListModal>
          <Logs></Logs>
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
