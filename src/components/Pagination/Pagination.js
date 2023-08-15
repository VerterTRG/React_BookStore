const Pagination = ({ currentPage, udpdatePage }) => {

    const handlePage = (value) => {
        udpdatePage(currentPage + value)
    }

    return (
        <div className="paginator">
            <button disabled={currentPage === 1} onClick={() => handlePage(-1)}>back</button>
            <button onClick={() => handlePage(1)}>next</button>
        </div>
    )
}

export default Pagination;