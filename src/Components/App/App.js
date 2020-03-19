import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NotesContainer from '../../Routes/Notes/';
import Note from '../../Routes/Note/';
import Add from '../../Routes/Add/';
import Update from '../../Routes/Update/';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={'/'} component={NotesContainer} />
        <Route path={'/note/:id'} component={Note} />
        <Route path={'/add'} component={Add} />
        <Route path={'/update/:id'} component={Update} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
