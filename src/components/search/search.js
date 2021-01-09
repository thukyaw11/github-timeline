import React, { useState, useRef, useEffect } from 'react';
import './search.css'
import { Button } from '../../components'
import  {TextField, CircularProgress, Box }from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
const Search = ({isLoading, getData}) => {
    const [value, setValue] = useState('thukyaw11');
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
        <Box my={2}>
        <div className="searchField">
            <Box mr={2}  width="100%">
             <TextField
          variant="outlined"
          fullWidth
          size="small"
          placeholder="Enter github username"
          onChange={handleOnChange} onKeyUp={handleOnKeyUp} onFocus={() => setHasFocus(true)} ref={inputRef} value={value}
        />
            </Box>

              <Button isLoading={isLoading} text={ isLoading ? <CircularProgress size={24}/> : <SearchIcon />} fn={handleOnClick}/>
        </div>
        </Box>

    );
}

export default Search;