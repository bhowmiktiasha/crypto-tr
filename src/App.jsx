import React, {useState, useEffect} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";

// import Header from "./components/Header";
import "./App.css";
import { WatchListContextProvider } from "./context/watchListContext";

import Loadering from "./components/Loadering";



const App = () => {

	const [isLoader, setisLoader] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setisLoader(false);
		}, 2500);
	});

  return (
    <>
    {isLoader ? <Loadering /> :
    <div className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          {/* <Header /> */}
          <Route exact path="/" component={CoinSummaryPage} />
          <Route path="/coins/:id" component={CoinDetailPage} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
}
</>
  );
};

export default App;
