import * as React from 'react';
// import Button from '@mui/material/Button';

// import SignIn from './components/Signin';
import Table from './components/Table';

export default function MyApp() {
  return (
    <div className='container border-1px solid black'>
    <div className='App-header'>
      {/* <SignIn/> */}
      {/* <Button variant="contained">Hello World</Button> */}
      <Table/>
    </div>
    </div>
  );
}
