import React from 'react';
import './loading.css'

const Loading = ({isLoading}) => {
    return isLoading? (
        <p>loading</p>
    ): null;
}

export default Loading;