import Header from "../Header.jsx";
import ArticlesList from "./ArticlesList.jsx";
import {useEffect, useState} from "react";
import {getArticles} from "../../../api.js";
import {Container} from "react-bulma-components";
import {useParams} from "react-router-dom";

export default function Articles(){

    const {topic} = useParams()
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getArticles(topic ? topic.toLowerCase() : undefined).then(articles => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, []);

    if (isLoading) return <Container alignContent={"center"}>
        <Header content={"Articles"}/>
        <img className={"image m-auto is-64x64"} src={"https://i.ibb.co/6bCLSjz/loading.gif"} alt={"loading symbol"}/>
    </Container>

    return <>
        <section className={"container"}>
            <Header content={"Articles"}/>
            <br/>
            <ArticlesList importedArticles={articles}/>
        </section>
    </>
}