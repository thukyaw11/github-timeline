import React from 'react';
import Box from '@material-ui/core/Box'

const code_url = 'https://github.com/thukyaw11/github-timeline';
const Welcome = () => {
    return (
        <Box display="flex" justifyContent="center">
            <p>Generate your github timeline <a href={code_url} target="blank">Srouce Code</a> </p>
        </Box>
    );
}

export default Welcome;