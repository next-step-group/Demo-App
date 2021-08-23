export default function MpvieTile(props) {
  const { id, title, overview, poster_path } = props.props;

  const borderStyle = {
    border: "1px",
    height: "400px",
    width: "350px",
    // backgroundColor: 'DodgerBlue',
    borderColor: "black",
    color: "white",
  };
  const imgStyle = {
    border: "1px",
    backgroundImage: "url(" + poster_path + ")",
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
  };

  return (
    <div id="movieTile" style={borderStyle}>
      <div id="poster" style={imgStyle}>
        <div id="star">
          {/* <img className='moviePosterImg' src={poster_path} /> */}
          <p id="description">{title}</p>
        </div>
      </div>
    </div>
  );
}
