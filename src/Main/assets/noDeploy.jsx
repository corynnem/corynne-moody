import React from "react";
import URL from '../../environment'


const NoDeploy = () => {



    return (
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'Quicksand'}}>
            <h1>The project you chose is not currently deployed :(</h1>
            <h4>Please choose another project <a href={`${URL}/applications`} style={{textDecoration: 'none', color: 'var(--dark-seafoam-green)'}}>here</a></h4>
        </div>
    )
}

export default NoDeploy