import ArticlesListArticle from "./ArticlesListArticle.jsx";
import {useEffect, useState} from "react";
import {getArticles} from "../../../api.js";
import {Container} from "react-bulma-components";

export default function ArticlesList({topic, order, sort, setIsError, searchParams, setSearchParams}) {

    const [articles, setArticles] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    function handleSearchParams(){
        const params = Object.fromEntries([...searchParams]);
        order ? setSearchParams({...params, order: order}) : ""
        sort ? setSearchParams({...params, sort: sort}) : ""
    }

    useEffect(() => {
        setIsLoading(true)
        getArticles(topic ? topic.toLowerCase() : undefined, order ? order : undefined, sort ? sort.toLowerCase() : undefined).then(articles => {
            setArticles(articles)
            handleSearchParams()
            setIsLoading(false)
        }).catch(() => {
            setIsError(true)
        })
    }, [order, sort, topic]);

    if (isLoading) return <Container alignContent={"center"}>
        <img className={"image m-auto is-64x64"} src={"https://i.ibb.co/6bCLSjz/loading.gif"} alt={"loading symbol"}/>
    </Container>

    return <div className={"columns is-centered is-multiline"} style={{justifyContent: "stretch"}}>
        {articles.map(article => <ArticlesListArticle article={article} key={article.article_id}/> )}
    </div>
}