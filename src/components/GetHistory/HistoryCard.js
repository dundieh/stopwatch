import React from 'react';

const HistoryCard = ({ note, time, id }) => {
  return (
    <div className='tc grow br3 ma2 bw2 shadow-5'>
      <div>
      	<p>{time}</p>
        <p>{note}</p>
      </div>
    </div>
  );
}

export default HistoryCard;