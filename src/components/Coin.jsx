import React from 'react';
import { Link } from 'react-router-dom';

const Coin = ({ coin, deleteCoin, search }) => {
	return (
		<Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
			<li
				search={search}
				className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-white"
				style={{ backgroundColor: 'black', borderColor: 'white' }}
			>
				<span className="text-decoration-none">
					<img className="coinlist-image" src={coin.image} alt="" />
					&nbsp;{coin.name}
				</span>

				<span className="text-decoration-none">${coin.current_price}</span>

				<span className={coin.price_change_percentage_24h < 0 ? 'text-danger mr-2' : 'text-success mr-2'}>
					{' '}
					{coin.price_change_percentage_24h.toFixed(2)}%
				</span>
				<i
					onClick={(e) => {
						e.preventDefault();
						deleteCoin(coin.id);
					}}
					className="delete-icon far fa-times-circle text-danger"
				></i>
				<span className="mkt"> Mkt Cap: ${coin.market_cap.toLocaleString()}</span>
			</li>
		</Link>
	);
};

export default Coin;
