import React from 'react';
import { useState } from 'react';

const Dropdown =() =>{

    const [open, isOpen] = useState(false);

    <ul onClick = {() => {isOpen(!open)}}>
        언어 선택{" "}
        {open ? ''}

    </ul>

}

export default Dropdown;