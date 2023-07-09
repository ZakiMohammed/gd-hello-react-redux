const Footer = () => {
  return (
    <footer className="footer has-background-light">
      <div className="content has-text-centered">
        <p><span className='has-text-primary'>HelloRedux</span> &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer