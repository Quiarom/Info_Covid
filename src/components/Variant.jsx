
function Variant(props) {
    return (
        <article>
            <img src="" alt="" />
            <img className="article__origin" title={props.origin} src={props.origin} alt="" />
            <p className="article__date">{props.date}</p>
            <h2 className="article__title">{props.name}</h2>
            <p>{props.description}</p>
        </article>
    )
}

export default Variant