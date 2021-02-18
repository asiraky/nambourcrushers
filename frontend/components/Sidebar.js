import React from 'react';

import BackgroundImage from './BackgroundImage';
import { fetchAPI } from '../lib/api';
import { GlobalContext } from '../layout/GlobalContext';

const Sidebar = () => {
    return (
		<GlobalContext.Consumer>
			{({ sponsors, upcoming }) => (
		        <div className="sidebar">
		            <h5 className="sidebar-title">
						Upcoming
					</h5>
		            {upcoming !== null && <div className="sidebar-fixtures">
						<div className="sidebar-fixtures-item">
							<div className="sidebar-fixtures-item-date">
								{upcoming.date} / {upcoming.location}
							</div>
							<div className="sidebar-fixtures-item-match">
								<div className="sidebar-fixtures-item-match-cell">
									<div className={`sidebar-fixtures-item-match-cell-team ${upcoming.location === 'Home' ? 'crushers' : 'guest'} `}></div>
									<div className="sidebar-fixtures-item-match-cell-team-name">
										{upcoming.location === 'Home' ? 'Nambour Crushers' : upcoming.opposition }
									</div>
								</div>
								<div className="sidebar-fixtures-item-match-cell middle">
									vs
								</div>
								<div className="sidebar-fixtures-item-match-cell">
								<div className={`sidebar-fixtures-item-match-cell-team ${upcoming.location === 'Home' ? 'guest' : 'crushers'} `}></div>
									<div className="sidebar-fixtures-item-match-cell-team-name">
										{upcoming.location === 'Home' ? upcoming.opposition : 'Nambour Crushers' }
									</div>
								</div>
							</div>
						</div>
		            </div>
					}
		            <h5 className="sidebar-title">
						Our sponsors
					</h5>
		            <div className="sidebar-sponsors">
		                {sponsors.map(sponsor => (
							<a href={sponsor.url} target="_blank" className="sidebar-sponsors-item" key={sponsor.name}>
								<div className="row middle">
									<div className="col-lg-6 col-xs-6">
										{sponsor.image && <BackgroundImage image={sponsor.image} size="100" />}
									</div>
									<div className="col-lg-6 col-xs-6">
										<div className="sidebar-sponsors-item-name">
											{sponsor.name}
										</div>
										<div className="sidebar-sponsors-item-desc">
											{sponsor.description}
										</div>
									</div>
								</div>
							</a>
		                ))}
		            </div>
		        </div>
			)}
		</GlobalContext.Consumer>
    );
};

export default Sidebar;
