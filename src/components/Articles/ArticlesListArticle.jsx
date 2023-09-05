import {Link} from "react-router-dom";

export default function ArticlesListArticle({article}) {
    return <section className={"column is-one-third"} aria-label={"Article"}>
        <Link to={`/articles/${article.article_id}`}>
            <div className={"box"}>
                <img className={"image pb-3"} src={article.article_img_url} alt={"article photo"}/>
                <p className={"title is-size-3"} aria-label={"article title"}>{article.title}</p>
                <p className={"subtitle"} aria-label={"article topic"}>{article.topic[0].toUpperCase() + article.topic.slice(1)}</p>
                <div className={"columns is-mobile"}>
                    <div className={"column is-two-thirds is-align-content-start"}>
                    <span className={"icon-text"}>
                        <span className={"icon"} aria-label={"user icon"}><i className={"fas fa-user"}/></span>
                        <span aria-label={"username"}><p>{article.author}</p></span>
                    </span>
                    </div>
                    <div className={"column is-one-third has-text-right"}>
                    <span className={"icon-text"}>
                        <span className={"icon"} aria-label={"Like"}><i className={"fas fa-heart"}/></span>
                        <span><p>{article.votes}</p></span>
                    </span>
                    </div>
                </div>
            </div>
        </Link>
    </section>
}