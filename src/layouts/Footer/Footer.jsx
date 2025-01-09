import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Footer>
        <div className="footer-wrapper">
          <div className="footer-menu">
            <nav>
              <ul className="flex flex-wrap">
                <li>
                  <Link
                    className="text-xs text-slate-400 hover:underline"
                    to=""
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xs text-slate-400 hover:underline"
                    to=""
                  >
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xs text-slate-400 hover:underline"
                    to=""
                  >
                    Pass
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xs text-slate-400 hover:underline"
                    to=""
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xs text-slate-400 hover:underline"
                    to=""
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xs text-slate-400 hover:underline"
                    to=""
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xs text-slate-400 hover:underline"
                    to=""
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xs text-slate-400 hover:underline"
                    to=""
                  >
                    Locations
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xs text-slate-400 hover:underline"
                    to=""
                  >
                    Language
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xs text-slate-400 hover:underline"
                    to=""
                  >
                    Meta Verified
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-copywrite">
            <p className="text-sm text-slate-400">© 2025 Instagram from Meta</p>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Footer;
