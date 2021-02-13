import { getStrapiMedia } from "../lib/media";

const BackgroundImage = ({ image, size }) => {
    const imageUrl = getStrapiMedia(image);
    return (
		<div className="background-image" style={{ backgroundImage:`url(${imageUrl})`, minHeight: `${size}px` }}></div>
    );
};

export default BackgroundImage;
