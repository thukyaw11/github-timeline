import React from 'react';
import './button.css';
import {Button as MaterailBtn } from '@material-ui/core'

const Button = ({ isLoading, hasError, text, fn, cssClass }) => {
	return (
		<div className='button__root'>
            <MaterailBtn variant="contained" color="primary" disabled={isLoading ? true: false} onClick={fn} disableElevation>
            {text}
            </MaterailBtn>
			{hasError && <p className={'button__error'}>{"Something didn't quite work"}</p>}
		</div>
	);
};

export default Button;
