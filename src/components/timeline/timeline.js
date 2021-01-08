import React from 'react';
import './timeline.css'
import {Button } from '../../components'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FastfoodIcon from '@material-ui/icons/Fastfood';
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
    oppositeContent: {
    flex: 0,
    padding: 0
  }
}));
const TimeLine = ({data, loadMore}) => {
    const classes = useStyles();
    return (
        <div>
            <Grid container>
            <Grid item xs={12}>
            {data?.repos?.map(repo => <Timeline align="left">
                
<TimelineItem>
          <TimelineOppositeContent
            className={classes.oppositeContent}
            color="textSecondary"
          >
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
   <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              {repo.name}
            </Typography>
            <Typography>{repo.description}</Typography>
          </Paper>
        </TimelineContent>
        </TimelineItem>
                </Timeline>)}
            {
                data?.pagination?.next && (
                    <Button text="load more" fn={loadMore}/>
                )
            }
            </Grid>
            </Grid>
        </div>
    );
}

export default TimeLine;