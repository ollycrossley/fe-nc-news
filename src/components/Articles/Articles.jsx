import Header from "../Header.jsx";
import ArticlesList from "./ArticlesList.jsx";
import {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import SortOrderBar from "./SortOrderBar.jsx";

export default function Articles() {

    // Page Content States
    const {topic} = useParams()
    // Page Loading States
    const [isError, setIsError] = useState(false)
    // Sort and Ordering States
    // const [sortBy, setSortBy] = useState("")
    const [orderBy, setOrderBy] = useState("desc")

    useEffect(() => {
        console.log("Changed Order!")

    }, [orderBy]);

    if (isError) return <section className={"container"}>
        <Header content={"Topic not found!"}/>
        <br/>
    </section>

    return <>
        <section className={"container"}>
            <Header content={topic ? `${topic[0].toUpperCase() + topic.slice(1)} Articles` : "Articles"}/>
            <br/>
            <SortOrderBar setOrderBy={setOrderBy}/>
            <ArticlesList topic={topic} order={orderBy} setIsError={setIsError}/>
        </section>
    </>
}