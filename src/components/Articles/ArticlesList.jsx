import ArticlesListArticle from "./ArticlesListArticle.jsx";
import {useEffect, useState} from "react";

export default function ArticlesList({importedArticles}) {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        setArticles(importedArticles)
    }, []);

    return <div className={"columns is-centered is-multiline"} style={{justifyContent: "stretch"}}>
        {articles.map(article => <ArticlesListArticle article={article} key={article.article_id}/> )}
    </div>
}