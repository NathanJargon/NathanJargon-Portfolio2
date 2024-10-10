import React from 'react';
import { Helmet } from 'react-helmet';
import Home from './screens/home';
import DisableZoom from './screens/component/DisableZoom';

function App() {
  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <style>
          {`
            html, body {
              touch-action: manipulation;
              -ms-touch-action: manipulation;
              overflow: hidden;
            }
          `}
        </style>
      </Helmet>
      <DisableZoom />
      <Home />
    </div>
  );
}

export default App;