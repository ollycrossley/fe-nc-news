import axios from "axios"

export const getArticles = () => {
    return axios.get("https://olly-nc-news.onrender.com/api/articles").then(response => response.data.articles)
}