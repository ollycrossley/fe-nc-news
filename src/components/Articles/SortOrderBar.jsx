import {useEffect, useRef, useState} from "react";


export default function SortOrderBar({setOrderBy, setSortBy}) {
    // Set Ref
    const ref = useRef(null)

    // Dropdown Active States
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

    function handleOrder(order) {
        if (order === "asc") {
            setOrderBy("asc")
        } else if (order === "desc") {
            setOrderBy("desc")
        }
    }

    function handleSort(sort) {
        console.log(acceptedSorts[sort])
        setSortBy(acceptedSorts[sort])
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
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
    }, [isSortDrActive, isOrderDrActive]);

    return <div className={"block is-inline-block"}>
        <div className={`dropdown ${isSortDrActive ? "is-active" : ""} pr-4`} ref={ref}>
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3"
                        onClick={() => setIsSortDrActive(!isSortDrActive)}>
                    <p>Sort by</p>
                    <span className="icon is-small has-text-danger">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">
                    {Object.keys(acceptedSorts).map(sort => <a className="dropdown-item" key={sort} onMouseDown={() => handleSort(sort)}>{sort}</a>)}
                </div>
            </div>
        </div>

        <div className={`dropdown ${isOrderDrActive ? "is-active" : ""}`}>
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3"
                        onClick={() => setIsOrderDrActive(!isOrderDrActive)}>
                    <p>Order</p>
                    <span className="icon is-small has-text-danger">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">
                    <a className="dropdown-item" onMouseDown={() => handleOrder("asc")}>Ascending</a>
                    <a className="dropdown-item" onMouseDown={() => handleOrder("desc")}>Descending</a>
                </div>
            </div>
        </div>

    </div>
}