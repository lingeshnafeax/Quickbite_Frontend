import PropTypes from "prop-types";

const ThemeProvider = ({ children, theme = "light" }) => {
  const validThemes = ["light", "dark"];
  const appliedTheme = validThemes.includes(theme) ? theme : "light";

  return <div className={`${appliedTheme}`}>{children}</div>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(["light", "dark"]),
};

export default ThemeProvider;
