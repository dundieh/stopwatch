import React from 'react';
import HistoryCard from './HistoryCard'
import './GetHistory.css';

const GetHistory = ({history}) => {
	return(
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main className="pa4 black-80">
				<div className="measure">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						<legend className="f1 fw6 ph0 mh0">History</legend>
						<br/>
						<div className="mt3">
							{
								history.map((user, i) => {
									return(
										<HistoryCard
											key={i}
											id={history[i].id}
											note={history[i].note}
											time={history[i].time}
										/>
									);
								})
							}
						</div>
					</fieldset>
				</div>
			</main>
		</article>
  	);
}

export default GetHistory;
