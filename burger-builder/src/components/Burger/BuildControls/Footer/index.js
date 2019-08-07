import React from 'react';

// example of loading from index and object destructring

export default function Footer({name, ...props}){
    return <div>
        <div style={{color: 'blue'}}><strong>{name} will deliver faster then {Object.keys(props).join(' and ')} !!! </strong></div>
    </div>
}