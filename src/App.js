import './App.css';
import { Header, Search, TimeLine  } from './components'
import { fetchData } from './api/index';
import { useState } from 'react';
import Container from '@material-ui/core/Container';


function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const getData = async user => {
    setIsLoading(true);
    try {
        const data = await fetchData(user);
          if(data === 'Not Found') {
            setNotFound(true);
          }

          setData(data);



    } catch (error) {
      setHasError(true);
    } finally  {
    setIsLoading(false);

    }
  }

  	const loadMore = async () => {
		setIsLoading(true);

		try {
			const user = data.repos[0].owner.login;
			const { page } = data.pagination.next;
			const fetchedData = await fetchData(user, page);

			setData({
				repos: [...data.repos, ...fetchedData.repos],
				pagination: { ...fetchedData.pagination }
			});

			setHasError(false);
		} catch (err) {
			setHasError(true);
		} finally {
			setIsLoading(false);
		}
	};


  return (
  <Container maxWidth="sm">
      <Header />
      <TimeLine data={data} loadMore={loadMore}/>
      <Search isLoading={isLoading} getData={getData}/>

    </Container>
  );
}

export default App;
