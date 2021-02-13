import { getStrapiMedia } from "../lib/media";

const BackgroundImage = ({ image }) => {
    const imageUrl = getStrapiMedia(image);
    return (
		<div className="background-image" style={{ backgroundImage:`url(${imageUrl})` }}></div>
    );
};

export default BackgroundImage;
