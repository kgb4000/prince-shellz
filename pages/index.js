


export default function Home() {
  return (
    <>
    <div className="container">
      <header><h1>Prince Shellz</h1></header>
      <div className="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/bFIKVSkJHOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
      <div className="info">
        Contact
      </div>
    </div>

    <footer className="footer">
      Prince Shellz &copy;{new Date().getFullYear()}
      <img src="images/instagram.png" />
    </footer>
    </>
  )
}
