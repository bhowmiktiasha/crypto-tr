import React from 'react';

import Loader from 'react-loader-spinner';

const Loadering = () => {
	return (
      
        <div style={{position: "fixed", top: "0", left: "0", background: "black", zIndex: "998", height: "100%", width: "100%"}}>
		<div style={{ position: "absolute", top: "50%", left: "50%", transform:"translate(-50%, -50%)", zIndex: "1000", backgroud: "black"}}>
			<Loader type="BallTriangle" color="white"  height={100} width={100}  timeout={3000} />
		</div>
        </div>
      
	);
};

export default Loadering;
