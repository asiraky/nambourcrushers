import Link from "next/link"
import BackgroundImage from "./BackgroundImage";

const Article = ({ item, link }) => {
    return (
		<div className="col-lg-12">
			<Link href={link}>
				<a href={link} className="news-item">
					<div className="row stretch">
						<div className="col-lg-4">
							{item.article.image && <BackgroundImage image={item.article.image} size="180" />}
						</div>
						<div className="col-lg-8">
							<div className="news-item-content">
								<div className="news-item-content-date">
									{new Date(item.published_at).toLocaleDateString()}
								</div>
								<h4 className="news-item-content-title">
									{item.article.title}
								</h4>
								{item.article.description &&
								<div className="news-item-content-text">
									{item.article.description}
								</div>
								}
							</div>
						</div>
					</div>
				</a>
			</Link>
		</div>
    );
};

export default Article;
