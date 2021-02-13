import { getStrapiMedia } from "../lib/media";

const Hero = ({ image, style }) => {
    const imageUrl = getStrapiMedia(image);
    return (
		<div className="hero" style={{backgroundImage: "url(" + imageUrl + ")"}}>
		</div>
    );
};

export default Hero;
