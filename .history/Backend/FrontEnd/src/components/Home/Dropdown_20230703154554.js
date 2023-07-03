import React from 'react';
import { useState } from 'react';

const Dropdown =() =>{

    const [open, isOpen] = useState(false);

    <ul onClick = {() => {isOpen(!open)}}>
        

    </ul>

}

export default Dropdown;