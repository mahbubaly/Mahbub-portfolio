import React from 'react';
import Particles from "react-tsparticles";
import ParticlesConfig from './ParticlesConfig';

const ParticlesBg = () => {
    return (
        <div>
            <Particles params={ParticlesConfig}></Particles>
            
        </div>
    );
};

export default ParticlesBg;