import ArticlesListArticle from "./ArticlesListArticle.jsx";
import {useEffect, useState} from "react";
import {getArticles} from "../../../api.js";
import {Container} from "react-bulma-components";

export default function ArticlesList() {

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getArticles().then(articles => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, []);

    if (isLoading) return <Container alignContent={"center"}>
        <img className={"image m-auto is-64x64"} src={"src/assets/loading.gif"} alt={"loading symbol"}/>
    </Container>

    return <div className={"columns is-centered is-multiline"} style={{justifyContent: "stretch"}}>
        {articles.map(article => <ArticlesListArticle article={article}/> )}
    </div>
}