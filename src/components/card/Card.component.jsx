import "./Card.style.css"

const CardComponent = ({state,confirmedcase,death,totalcase}) =>{
    return(
        <>
        <div className="covid-card">
            <div className="card">
                <h3>{state}</h3>
                <h4>Confirmed Case : {confirmedcase}</h4>
                <h4>Death : {death}</h4>
                <h4>Total Case : {totalcase}</h4>
            </div>
        </div>
            
        </>
    )
}

export default CardComponent