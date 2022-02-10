
function Variant(props) {
    return (
        <article>
            <img src="" alt="" />
            <img src={props.origin} alt="" />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className="article__info">
                <p>{props.date}</p>
            </div>
        </article>
    )
}

export default Variant