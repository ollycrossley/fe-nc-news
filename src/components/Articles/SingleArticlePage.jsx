import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getArticle} from "../../../api.js";
import moment from "moment";

export default function SingleArticlePage() {
    const {article_id} = useParams()
    const [article, setArticle] = useState({})

    useEffect(() => {
        getArticle(article_id).then(article => {
            setArticle(article)
        })
    }, []);

    return <div className={"container is-mobile"} id={"single-article-container"}>

        <h1 className={"title"}>{article.title}</h1>

        <section className={"block"}>
            <span className={"icon-text"}>
                <span className={"icon"} aria-label={"Time"}><i className={"fas fa-clock"}/></span>
                <span><p>{moment(article.created_at).utc().format("DD-MM-YYYY")}</p></span>
            </span>
            <span className={"icon-text pl-4"}>
                <span className={"icon"} aria-label={"Topic"}><i className={"fas fa-tag"}/></span>
                <span><p>{article.topic}</p></span>
            </span>
        </section>


        <section>
            <figure className={"block"}>
                <img className={"image"} src={article.article_img_url} alt={"article image"}/>
            </figure>
            <div className={"block"} style={{display: "inline-block"}}>
                    <span className={"icon-text is-size-5"} id={"article-username-block"}>
                    <span className={"icon pr-3"} aria-label={"user"}><i className={"fas fa-user"}/></span>
                    <span><p>{article.author}</p></span>
                </span>
                <hr/>
            </div>
        </section>

        <p className={"block mb-6"} style={{width: "70%"}}>{article.body}</p>

    </div>
}