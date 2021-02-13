import React from "react";

import Image from "./Image"

const Sponsors = ({ sponsors }) => {
    return (
        <div className="sponsors">
            <h5 className="sponsors-title">Our sponsors</h5>
            <div className="sponsors-list">
                {sponsors.map(sponsor => (
					<a href={sponsor.url} target="_blank" className="sponsors-list-item" key={sponsor.name}>
						<div className="row middle">
							<div className="col-lg-6 col-xs-6">
								<div className="sponsors-list-item-image">
									<Image image={sponsor.image} />
								</div>
							</div>
							<div className="col-lg-6 col-xs-6">
								<div className="sponsors-list-item-name">
									{sponsor.name}
								</div>
								<div className="sponsors-list-item-desc">
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
