import Header from "./Header.jsx";

export default function ErrorPage() {

    return <div className={"container"}>
        <Header content={"Oops!"}/>
        <br/><br/>
        <p className={"has-text-centered title"}>This page doesn't exist!</p>
    </div>

}