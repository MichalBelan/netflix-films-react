import "./ReloadMovieButton.css"

const ReloadMovieButton = (props)=>{
    return(
      <button className="reload-movies-button" onClick={props.reloadMovies}>Obnovit</button>
    )
}
export default ReloadMovieButton