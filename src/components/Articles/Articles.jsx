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
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getArticles(topic ? topic.toLowerCase() : undefined).then(articles => {
            setArticles(articles)
            setIsLoading(false)
        }).catch((err) => {
            console.log(err)
            setIsLoading(false)
            setIsError(true)
        })
    }, []);

    if (isLoading) return <Container alignContent={"center"}>
        <Header content={"Articles"}/>
        <img className={"image m-auto is-64x64"} src={"https://i.ibb.co/6bCLSjz/loading.gif"} alt={"loading symbol"}/>
    </Container>

    if (isError) return <section className={"container"}>
        <Header content={"Topic not found!"}/>
        <br/>
    </section>

    return <>
        <section className={"container"}>
            <Header content={topic ? `${topic[0].toUpperCase() + topic.slice(1)} Articles` : "Articles"}/>
            <br/>
            <ArticlesList importedArticles={articles}/>
        </section>
    </>
}