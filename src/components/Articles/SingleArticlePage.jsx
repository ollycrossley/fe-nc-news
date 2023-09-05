import Header from "../Header.jsx";
import {useParams} from "react-router-dom";

export default function SingleArticlePage() {
    const {article_id} = useParams()
    return <>
    <Header content={"Returning article "+article_id}/>
    </>
}