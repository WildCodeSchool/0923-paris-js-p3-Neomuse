import useAllDataContext from "../contexts/AllDataContext";

function ArtistlistHome() {
  const { artists } = useAllDataContext();

  return (
    <div className="body_artistlist">
      <div className="portrait_artist">
        {artists.map((artist) => (
          <div key={artist?.id}>
            {artist?.thumbnail && (
              <img className="image_artist" src={artist?.thumbnail} alt="" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistlistHome;
