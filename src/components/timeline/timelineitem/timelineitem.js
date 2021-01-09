import React, {useEffect} from 'react';
import './timelineitem.css'
import dayjs from 'dayjs';
import FolderIcon from '@material-ui/icons/Folder';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
const DATE_FORMAT = 'DD-MM-YYYY';



const TimeLineCard = ({data}) => {
    const { name, description, created_at, fork, html_url,stargazers_count } = data;

	const formatDate = (date, format) => {
		return dayjs(date).format(format);
	};

	const getLabel = date => {
		return dayjs(date).format('YYYY');
	};

	const getIcon = isFork => {
		if (isFork) {
			return <DeviceHubIcon color="secondary"/>;
		}
		return <FolderIcon color="primary"/>;
	};
    return ( 	<div className='timelineitem__root'>
			<div className='timelineitem__separator'>
				<div title={fork ? 'Fork' : 'Repository'} className='timelineitem__dot'>
					<h2 className={'timelineitem__label'}>{getLabel(created_at)}</h2>
					{getIcon(fork)}
				</div>
				<div className='timelineitem__connector'></div>
			</div>
			<div className='timelineitem__content'>
				<a
					className='timelineitem__title'
					target='_blank'
					rel='noreferrer noopener'
					href={html_url}>
					{name}
				</a>
				<h2 className='timelineitem__description'>{description}</h2>
	            <p title={DATE_FORMAT} className='timelineitem__date' display="flex">
                <span>{formatDate(created_at, DATE_FORMAT)}</span>
                    {
                        stargazers_count > 0?   <span>{stargazers_count} {stargazers_count > 1 ? 'stars' : 'star'}</span> : null
                    }
                           
				</p>
        
                </div>
			
		</div>);
}

export default TimeLineCard;