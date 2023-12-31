import Header from "../Header.jsx";
import ArticlesList from "./ArticlesList.jsx";
import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import SortOrderBar from "./SortOrderBar.jsx";
import {getTopics} from "../../../api.js";

export default function Articles() {
    let [searchParams, setSearchParams] = useSearchParams()

    // Page Content States
    const {topic} = useParams()

    // Page Loading States
    const [isError, setIsError] = useState(false)

    const [topics, setTopics] = useState([])

    // Sort and Ordering States
    const [sortBy, setSortBy] = useState(searchParams.get("sort_by") || "created_at")
    const [orderBy, setOrderBy] = useState(searchParams.get("order") || "desc")

    useEffect(() => {
        getTopics().then(topics => setTopics(topics)).catch(() => setIsError(true))
    }, []);

    if (isError) return <section className={"container"}>
        <Header content={"Topic not found!"}/>
        <br/>
    </section>

    return <>
        <section className={"container"}>
            <Header content={topic ? `${topic[0].toUpperCase() + topic.slice(1)} Articles` : "Articles"}/>
            <br/>
            <SortOrderBar sortBy={sortBy} orderBy={orderBy} setOrderBy={setOrderBy} setSortBy={setSortBy} topic={topic} topics={topics}/>
            <ArticlesList topic={topic} order={orderBy} setIsError={setIsError} sort={sortBy} searchParams={searchParams} setSearchParams={setSearchParams}/>
        </section>
    </>
}