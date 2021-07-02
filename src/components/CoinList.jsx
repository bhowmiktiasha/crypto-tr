import React, { useEffect, useState, useContext } from 'react';
import { Grid, Button } from '@material-ui/core';
import coinGecko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchListContext';
import Coin from './Coin';
import styles from './Search.module.css';
// import Pagination from '@material-ui/lab/Pagination';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 	  '& > * + *': {
// 		marginTop: theme.spacing(2),
// 	  },
// 	},
//   }));

const CoinList = () => {
	// const classes = useStyles();

	const [coins, setCoins] = useState([]);
	const { watchList, deleteCoin } = useContext(WatchListContext);
	const [isLoading, setIsLoading] = useState(false);
	const [visible, setVisible] = useState(5);
	const [page, setPage] = useState(6);
	// const[sorting, setSorting] = useState(coins);
	// const[currentPage, setCurretPage] = useState(0);
	// const[postperPage, setPostPerPage] = useState(10);

	const [search, setSearch] = useState('');
	console.log(watchList);
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const response = await coinGecko.get('/coins/markets/', {
				params: {
					vs_currency: 'usd',
					ids: watchList.join(','),
				},
			});
			setCoins(response.data);
			setIsLoading(false);
		};

		if (watchList.length > 0) {
			fetchData();
		} else setCoins([]);
	}, [watchList]);

	const renderCoins = () => {
		if (isLoading) {
			return <div style={{ color: 'white' }}>Loading...</div>;
		}

		const handleChange = (e) => {
			e.preventDefault();

			setSearch(e.target.value.toLowerCase());
		};

		const loadMore = () => {
			setVisible(visible + 5);
		};

		const sortByPriceHigh = () => {
			const sorted = [...coins].sort((a, b) => {
				return b.current_price - a.current_price;
			});
			setCoins(sorted);
			//alert(sorted[0].name);
		};

		const sortByPriceLow = () => {
			const sorted = [...coins].sort((a, b) => {
				return a.current_price - b.current_price;
			});
			setCoins(sorted);
			//alert(sorted[0].name);
		};

		const handlePage = (event, value) => {
			setPage(value);
		};

		return (
			<ul className="coinlist list-group mt-2">
				<div className={styles.coin_search}>
					<input className={styles.coin_input} type="text" placeholder="Search" onChange={handleChange} />
					<div>
						<button
							onClick={sortByPriceLow}
							style={{
								color: 'white',
								border: '2px solid #ffc107',
								marginRight: '12px',
								borderRadius: '3px',
								fontSize: '14px',
								backgroundColor: 'transparent',
								padding: '5px',
							}}
						>
							Low
						</button>
						<button
							onClick={sortByPriceHigh}
							style={{
								color: 'white',
								border: '2px solid #ffc107',
								borderRadius: '3px',
								fontSize: '14px',
								backgroundColor: 'transparent',
								padding: '5px',
							}}
						>
							High
						</button>
					</div>
				</div>

				{/* <div>
					<button onClick={sortByPrice}>click </button>
				</div>
 */}
				{coins
					.filter((coin) => {
						if (search === '') {
							return (
								<Coin
									key={coin.id}
									coin={coin}
									serach={search}
									sortByPriceLow={sortByPriceLow}
									sortByPriceHigh={sortByPriceHigh}
									deleteCoin={deleteCoin}
									page={page}
								/>
							);
						} else if (coin.name.toLowerCase().includes(search.toLowerCase())) {
							return (
								<Coin
									key={coin.id}
									coin={coin}
									sortByPriceHigh={sortByPriceHigh}
									sortByPriceLow={sortByPriceLow}
									serach={search}
									deleteCoin={deleteCoin}
									page={page}
								/>
							);
						}
					})

					.slice(0, visible)
					.map((coin) => {
						return (
							<Coin
								key={coin.id}
								coin={coin}
								sortByPriceHigh={sortByPriceHigh}
								serach={search}
								sortByPriceLow={sortByPriceLow}
								deleteCoin={deleteCoin}
								page={page}
							/>
						);
					})}

				{visible < coins.length && (
					<Grid style={{ display: 'inline-grid', padding: '0vh 15vh' }}>
						<Button
							onClick={loadMore}
							style={{
								marginTop: '2vw',
								color: 'black',
								marginBottom: '2vw',
								backgroundColor: '#ffc107',
								fontWeight: '600',
							}}
						>
							Load More
						</Button>
					</Grid>
				)}

				{/* <div className={classes.root}>
				<Pagination count={10} page={page} onChange={handlePage} />
				</div> */}
			</ul>
		);
	};

	return <div>{renderCoins()}</div>;
};

export default CoinList;
