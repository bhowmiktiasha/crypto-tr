import React, { useState } from 'react';
import AddCoin from '../components/AddCoin';
import CoinList from '../components/CoinList';

const CoinSummaryPage = () => {
	return (
		<>
			<div>
				<h1 className="text-center text-warning mt-3 mb-3" style={{ fontSize: '25px' }}>
					CryptoMarket
				</h1>
				<h1 className="text-center mb-5" style={{ fontSize: '15px', color: 'white' }}>
					** Click on the coin-rows to view Statictics **
				</h1>
			</div>
			<div className="coinsummary shadow border p-2 rounded mt-2 bg-black">
				<AddCoin />
				<CoinList />
			</div>
		</>
	);
};

export default CoinSummaryPage;
