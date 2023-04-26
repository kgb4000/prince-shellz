


export default function Home() {
  return (
    <>
    <div className="container">
      <header><h1>Marrico</h1></header>
      <div className="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/JcqyTVJopr0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
      <div className="info">
        Contact Marrico
      </div>
    </div>

    <footer className="footer">
      Prince Shellz &copy;{new Date().getFullYear()}
      <div>
        <img src="images/instagram.png" />
        <img src="images/spotify.png" />
        <img src="images/itunes.png" />
      </div>
      
    </footer>
    </>
  )
}
