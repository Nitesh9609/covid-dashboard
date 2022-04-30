import CardComponent from '../card/Card.component'
import './card-items.style.css'

const CardItem = ({apidatas}) =>{
    return(
        <>
            <div className='card-layout'>

            {
                apidatas.map((finaldata,idx) =><CardComponent 
                key={idx} 
                state={finaldata.loc}
                confirmedcase={finaldata.confirmedCasesIndian}
                death={finaldata.deaths}
                totalcase={finaldata.totalConfirmed}
                />)
              }
            </div>
        </>
    )
}

export default CardItem