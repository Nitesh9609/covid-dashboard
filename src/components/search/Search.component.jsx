import './search.style.css'

const Search = ({searching}) =>{
    return(
        <>
                <input
                    type="search"
                    placeholder='Search the state'
                    onChange={searching}
                ></input>
        </>
    )
}


export default Search