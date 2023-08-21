import "./Pagination.scss"

const Pagination = ({ currentPage, udpdatePage, updateVeiwCount }) => {

    const handlePage = (value) => {
        udpdatePage(currentPage + value)
    }

    return (
        <div className="paginator">
            <select name="limit" onChange={(e) => updateVeiwCount(e.target.value)}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={40}>40</option>
            </select>
            <button disabled={currentPage === 1} onClick={() => handlePage(-1)}>back</button>
            <button onClick={() => handlePage(1)}>next</button>
        </div>
    )
}

export default Pagination;