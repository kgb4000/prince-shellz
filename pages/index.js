export default function Home() {
  return (
    <>
    {/* <video autoplay muted loop id="myVideo">
      <source src="/video/maricco.mov" type="video/mov"/>
    </video> */}
    <div className="container">
      <header><h1>Marric0</h1></header>
      <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JcqyTVJopr0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
      <div className="info">
        Contact Marric0
      </div>
    </div>

    <footer className="footer">
      Marric0 &copy;{new Date().getFullYear()}
      <div>
        <a href="https://www.instagram.com/marric0/?hl=en" target="_blank"><img src="images/instagram.png" alt="Instagram"/></a>
        <a href="https://open.spotify.com/artist/0fXRvGwnIicMcZpAiqtkBz" target="_blank"><img src="images/spotify.png" alt="Spotify"/></a>
        <a href="https://music.apple.com/us/artist/marrico/375256925" target="_blank"><img src="images/itunes.png" alt="Apple music"/></a>
      </div>
      
    </footer>
    </>
  )
}
