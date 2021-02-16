import React from "react";

import BackgroundImage from "./BackgroundImage";
import { fetchAPI } from "../lib/api";

const Sponsors = ({ sponsors, upcoming }) => {
    return (
        <div className="sidebar">
            <h5 className="sidebar-title">
				Upcoming
			</h5>
            <div className="sidebar-fixtures">
				<div className="sidebar-fixtures-item">
					<div className="sidebar-fixtures-item-date">
						2020-02-08 / Home
					</div>
					<div className="sidebar-fixtures-item-match">
						<div className="sidebar-fixtures-item-match-cell">
							<div className="sidebar-fixtures-item-match-cell-team crushers"></div>
							<div className="sidebar-fixtures-item-match-cell-team-name">
								Nambour Crushers
							</div>
						</div>
						<div className="sidebar-fixtures-item-match-cell middle">
							vs
						</div>
						<div className="sidebar-fixtures-item-match-cell">
							<div className="sidebar-fixtures-item-match-cell-team guest"></div>
							<div className="sidebar-fixtures-item-match-cell-team-name">
								Guest
							</div>
						</div>
					</div>
				</div>
            </div>
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
    );
};

export default Sponsors;
