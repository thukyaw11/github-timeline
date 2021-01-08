const parse = require('parse-link-header');
const PER_PAGE = 30;
const DEFAULT_PAGE = 1;

export const fetchData = async (user, page = DEFAULT_PAGE) => {
	try {
		const res = await fetch(
			`https://api.github.com/users/${user}/repos?type=public&sort=created&direction=desc&page=${page}&per_page=${PER_PAGE}`
		);

		let data = await res.json();
	
		const linkHeader = res.headers.get('Link');

		if (data.length < 1 || data.message) {
			throw data.message || 'Not Found';
		} else if (linkHeader) {
			const parsed = parse(linkHeader);
			data = { repos: [...data], pagination: { ...parsed } };
		} else {
			data = { repos: [...data], pagination: { ...null } };
		}

		return data;
	} catch (err) {
		return err;
	}
};
