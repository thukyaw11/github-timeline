import React from 'react';
import './timeline.css'
import {Button, TimeLineCard,} from '../../components'
import { Grid,Box } from '@material-ui/core';
import { Welcome, NotFound, Error } from '../states';

const TimeLine = ({data, loadMore, hasError, notFound }) => {
    return (
        <div>
            <Grid container>
            <Grid item xs={12}>
         		{data?.repos?.map(repo => <TimeLineCard key={repo.id} data={repo} />)}
            {
                data?.pagination?.next && (
                  <Box my={5} display="flex" justifyContent="center">
                    <Button text="load more" fn={loadMore} />
                  </Box>

                )
            }

            	{!data.repos && !hasError && !notFound && <Welcome />}
			{!data.repos && notFound && !hasError && <NotFound />}
			{!data.repos && hasError && <Error />}

              
            </Grid>
            </Grid>
        </div>
    );
}

export default TimeLine;