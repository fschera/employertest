import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import './index.css';
//import {Button} from './components/app/app';
import BootstrapTest from './BootstrapTest';
import styled from 'styled-components';

/*const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
`;*/

const root = ReactDOM.createRoot(document.getElementById('root'));
/*
root.render(
  <React.StrictMode>
    <App/>
    <BigButton as="a">send as e-mail</BigButton>
    <BootstrapTest/>
  </React.StrictMode>
);*/

root.render(
  <React.StrictMode>
    <App/>
   <BootstrapTest/>
  </React.StrictMode>
);
