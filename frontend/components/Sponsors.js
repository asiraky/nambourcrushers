import React from "react";

import Image from "./Image"

const Sponsors = ({ sponsors }) => {
    return (
        <div>
            <div>These are our sponsors</div>
            <ul>
                {sponsors.map(sponsor => (
                    <a href={sponsor.link} key={sponsor.name}>
                        <li>
                            <div>{sponsor.name}</div>
                            <Image image={sponsor.image} style={{ width: '100px' }}/>
                            <div>{sponsor.description}</div>
                        </li>
                    </a>
                ))}
            </ul>
        </div>
    );
};

export default Sponsors;