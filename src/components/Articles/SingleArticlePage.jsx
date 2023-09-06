import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getArticle, getComments} from "../../../api.js";
import moment from "moment";
import Comments from "./Comments/Comments.jsx";

export default function SingleArticlePage() {
    const {article_id} = useParams()
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getArticle(article_id).then(article => {
            setArticle(article)
        })
        getComments(article_id).then(comments => {
            setComments(comments)
            setIsLoading(false)
        })
    }, []);

    if (isLoading) return <section className={"container"}>
        <img className={"image is-64x64 m-auto"} src={"https://i.ibb.co/6bCLSjz/loading.gif"} alt={"loading symbol"}/>
        <br/><br/>
    </section>

    return <div className={"container is-mobile"} id={"single-article-container"}>

        <h1 className={"title"}>{article.title}</h1>

        <section className={"block"}>
            <span className={"icon-text"}>
                <span className={"icon"} aria-label={"Time"}><i className={"fas fa-clock"}/></span>
                <span><p>{moment(article.created_at).fromNow()}</p></span>
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

        <Comments article={article} comments={comments}/>

    </div>
}