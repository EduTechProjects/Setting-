import React from 'react';
import { useState } from 'react';
import Dropdownlist from './Dropdownlist';

const Dropdown =() =>{

    const [open, isOpen] = useState(false);

    <ul onClick = {() => {isOpen(!open)}}>
        언어 선택{" "}
        {open ? '^' : '⌄'}
        {open && <Dropdownlist />}

    </ul>

}

export default Dropdown;