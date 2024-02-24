import React from 'react';
import ModuleList from "../Modules/List";
import Status from "./Status";


function Home() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', margin: '0', padding: '0' }}>
      <div style={{ flex: '4' }}>
        <ModuleList/>
      </div>
      <div style={{ flex: '1' }}>
        <Status/>
      </div>
    </div>
  );
}

export default Home;
