import Header from "../Header.jsx";
import ArticlesList from "./ArticlesList.jsx";

export default function Articles(){

    return <>
        <section className={"container"}>
            <Header content={"Articles"}/>
            <br/>
            <ArticlesList/>
        </section>
    </>
}