const HeaderSocials = ({ footer }: { footer?: boolean }) => {
  return (
    <div className="home__socials">
      <a
        href="https://wuzzuf.net/me/mayer-mamdouh-64da45c781"
        className={`home-social-link ${footer ? "footer" : ""}`}
        target="_blank"
      >
        <i className="fa-brands fa-w"></i>
      </a>

      <a
        href="https://github.com/mayermamdouh"
        className={`home-social-link ${footer ? "footer" : ""}`}
        target="_blank"
      >
        <i className="fa-brands fa-github"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/mayer-mamdouh-20a697182"
        className={`home-social-link ${footer ? "footer" : ""}`}
        target="_blank"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
