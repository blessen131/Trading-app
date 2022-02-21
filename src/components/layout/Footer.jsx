import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function Footer({ bgColor, textColor }) {
  const footerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  const footerYear = new Date().getFullYear();
  return (
    <footer style={footerStyles}>
      <div>
        <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
          About
        </Link>

        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
}
Footer.defaultProps = {
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Footer.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Footer;
