import React, { useState, useRef, useEffect } from 'react';
import './search.css'
import { Button } from '../../components'

const Search = ({isLoading, getData}) => {
    const [value, setValue] = useState('');
    const [hasFocus, setHasFocus] = useState(false);
    const inputRef = useRef(null);

    const handleOnChange = (e) => {
        setValue(e.target.value);
    }

    const handleOnKeyUp = e => {
        if(e.key === 'Enter') {
            handleOnClick();
        }
    }

    const handleOnClick = () => {
        if(!value.length) return;

        setHasFocus(true);
        console.log('click');
        getData(value);
        setValue('');
    }

    useEffect(() => {
		const { current: input } = inputRef;
		hasFocus ? input.focus() : input.blur();
	}, [hasFocus]);

    return (
        <div>
        <input type="text" placeholder="search" onChange={handleOnChange} onKeyUp={handleOnKeyUp} onFocus={() => setHasFocus(true)} ref={inputRef} value={value}/>
              <Button isLoading={isLoading} text={'Generate'} fn={handleOnClick}/>
              
        </div>
    );
}

export default Search;