import ArticlesListArticle from "./ArticlesListArticle.jsx";
import {useEffect, useState} from "react";
import {getArticles} from "../../../api.js";
import {Container} from "react-bulma-components";
import Header from "../Header.jsx";

export default function ArticlesList({topic, order, setIsError}) {

    const [articles, setArticles] = useState([])

    // Sort and Ordering States
    // const [sortBy, setSortBy] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getArticles(topic ? topic.toLowerCase() : undefined, order ? order : undefined).then(articles => {
            setArticles(articles)
            setIsLoading(false)
        }).catch(err => {
            setIsError(true)
        })
    }, [order]);

    if (isLoading) return <Container alignContent={"center"}>
        <img className={"image m-auto is-64x64"} src={"https://i.ibb.co/6bCLSjz/loading.gif"} alt={"loading symbol"}/>
    </Container>

    return <div className={"columns is-centered is-multiline"} style={{justifyContent: "stretch"}}>
        {articles.map(article => <ArticlesListArticle article={article} key={article.article_id}/> )}
    </div>
}