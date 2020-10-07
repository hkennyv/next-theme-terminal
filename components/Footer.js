export default function Footer({ copyright }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {copyright ? (
          <div className="copyright copyright--user">
            <span></span>
            <span>
              :: Theme made by <a href="https://twitter.com/panr">panr</a>
            </span>
          </div>
        ) : (
          <div className="copyright">
            <span>
              © {new Date().getFullYear()} Powered by{" "}
              <a href="https://nextjs.org/">NextJS</a>
            </span>
            <span>
              :: Theme made by <a href="https://twitter.com/panr">panr</a>
            </span>
          </div>
        )}
      </div>
    </footer>
  );
}
