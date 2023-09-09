import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";


export default function SortOrderBar({sortBy, orderBy, setOrderBy, setSortBy, topic, topics}) {
    // Set Ref
    const ref = useRef(null)

    const navigate = useNavigate()

    // Dropdown Active States
    const [isCatDrActive, setIsCatDrActive] = useState(false)
    const [isOrderDrActive, setIsOrderDrActive] = useState(false)
    const [isSortDrActive, setIsSortDrActive] = useState(false)

    // Accepted Sorts
    const acceptedSorts = {
        Author: "author",
        Title: "title",
        ID: "article_id",
        Topic: "topic",
        "Created At": "created_at",
        Popularity: "votes",
        Comments: "comment_count"
    }

    const acceptedOrders = {
        Ascending: "asc",
        Descending: "desc"
    }

    function handleOrder(order) {
        if (order === "asc") {
            setOrderBy("asc")
        } else if (order === "desc") {
            setOrderBy("desc")
        }
    }

    function handleSort(sort) {
        setSortBy(acceptedSorts[sort])
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isCatDrActive && ref.current && !ref.current.contains(e.target)) {
                setIsCatDrActive(false)
            }
            if (isSortDrActive && ref.current && !ref.current.contains(e.target)) {
                setIsSortDrActive(false)
            }
            if (isOrderDrActive && ref.current && !ref.current.contains(e.target)) {
                setIsOrderDrActive(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isSortDrActive, isOrderDrActive, isCatDrActive]);

    return <div className={"block is-inline-block"}>

        <div className={`dropdown ${isCatDrActive ? "is-active" : ""} pr-4`} ref={ref}>
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3"
                        onClick={() => setIsCatDrActive(!isCatDrActive)}>
                    <p><strong>{topic ? topic[0].toUpperCase() + topic.slice(1) : "All"}</strong></p>
                    <span className="icon is-small has-text-danger">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">
                    <a className={`dropdown-item ${!topic ? "has-background-danger-light" : "" }`} key={"all"} onMouseDown={() => navigate("/articles")}>All</a>
                    {topics.map(thisTopic => <a className={`dropdown-item ${thisTopic.slug === topic ? "has-background-danger-light" : "" }`} key={thisTopic.slug}
                                            onMouseDown={() => navigate(`/articles/topics/${thisTopic.slug}`)}>{thisTopic.slug[0].toUpperCase() + thisTopic.slug.slice(1)}</a>)}
                </div>
            </div>
        </div>

        <div className={`dropdown ${isSortDrActive ? "is-active" : ""} pr-4`} ref={ref}>
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3"
                        onClick={() => setIsSortDrActive(!isSortDrActive)}>
                    <p><strong>Sort by</strong> ({Object.keys(acceptedSorts).find(key => acceptedSorts[key] === sortBy)})</p>
                    <span className="icon is-small has-text-danger">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">
                    {Object.keys(acceptedSorts).map(sort => <a className={`dropdown-item ${acceptedSorts[sort] === sortBy ? "has-background-danger-light" : ""}`} key={sort}
                                                               onMouseDown={() => handleSort(sort)}>{sort}</a>)}
                </div>
            </div>
        </div>

        <div className={`dropdown ${isOrderDrActive ? "is-active" : ""}`}>
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3"
                        onClick={() => setIsOrderDrActive(!isOrderDrActive)}>
                    <p><strong>Order</strong> ({Object.keys(acceptedOrders).find(key => acceptedOrders[key] === orderBy)})</p>
                    <span className="icon is-small has-text-danger">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">
                    <a className={`dropdown-item ${orderBy === "asc" ? "has-background-danger-light" : ""}`} onMouseDown={() => handleOrder("asc")}>Ascending</a>
                    <a className={`dropdown-item ${orderBy === "desc" ? "has-background-danger-light" : ""}`} onMouseDown={() => handleOrder("desc")}>Descending</a>
                </div>
            </div>
        </div>

    </div>
}