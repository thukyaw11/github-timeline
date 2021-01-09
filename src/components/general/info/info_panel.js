import React from 'react';
import './info_panel.css'

const InfoPanel = ({ data }) => {
	if (!data || data.length < 1) {
		return null;
	}

	const { login, avatar_url, html_url } = data[0].owner;
	return (
		<div key={login} className={'infopanel__root'}>
			<img className={'infopanel__avatar'} src={avatar_url} alt={'avatar'} />
			<a className='infopanel__username' target='_blank' rel='noreferrer noopener' href={html_url}>
				<span className={'alt-link'}>{login}</span>
			</a>
			's activity
		</div>
	);
};

export default InfoPanel;
