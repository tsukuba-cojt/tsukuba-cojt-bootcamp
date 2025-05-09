import React from 'react';
import ProfileCard from './ProfileCard' ;

function App(){
    return(
        <div>
        <ProfileCard name="ゆい" age={20} circle="やど" />
        <ProfileCard name="さとね" age={21} circle="jsys" />
        </div>
    );
}

export default App;