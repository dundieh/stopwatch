import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import sw from './stopwatch.png';

class Logo extends React.Component {
	render() {
        return (
            <div className='ma4 mt0 tc'>
                <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{height: 120, width: 120 }} >
                    <div className="Tilt-inner pa3">
                        <img style={{paddingTop: '5px'}} alt='logo' src={sw}/>
                    </div>
                </Tilt>
            </div>
        );
    }
}

export default Logo;