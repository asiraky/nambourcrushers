import Link from "next/link"

import Image from "./Image";

const Article = ({ article, link }) => {
    return (
        <Link href={link}>
            <li>
                {article.image && <Image image={article.image} style={{ width: '50px' }} />}
                <span>{article.title}</span>
                <span>{article.description}</span>
            </li>
        </Link>
    );
};

export default Article;
