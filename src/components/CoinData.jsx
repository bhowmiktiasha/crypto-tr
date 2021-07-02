import React from "react";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="bg-black mt-3 p-2 rounded border row">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category" style={{color: "white"}}>Market Cap</span>
              <span style={{color: "white"}}> ${data.market_cap}</span>
            </div>
            <hr style={{borderTop: "1px solid white"}}/>
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category" style={{color: "white"}}>
                Total Supply
              </span>
              <span style={{color: "white"}}>{data.total_supply}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category" style={{color: "white"}}>Volume(24H)</span>
              <span style={{color: "white"}}>{data.total_volume}</span>
            </div>
            <hr style={{borderTop: "1px solid white"}}/>
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category" style={{color: "white"}}>high 24h</span>
              <span style={{color: "white"}}> ${data.high_24h}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category" style={{color: "white"}}>
                Circulating Supply
              </span>
              <span style={{color: "white"}}>{data.circulating_supply}</span>
            </div>
            <hr style={{borderTop: "1px solid white"}}/>
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category" style={{color: "white"}}>low 24h</span>
              <span style={{color: "white"}}> ${data.low_24h}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
