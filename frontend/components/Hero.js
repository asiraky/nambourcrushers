import { getStrapiMedia } from "../lib/media";

const Hero = ({ image, style }) => {
    const imageUrl = getStrapiMedia(image);
    return (
		<section className="hero" style={{backgroundImage: "url(" + imageUrl + ")"}}>
		</section>
    );
};

export default Hero;
