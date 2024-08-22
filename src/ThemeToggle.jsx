import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

const ThemeToggle = () => {
  const { darkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button type="button" className="dark-toggle" onClick={toggleDarkTheme}>
        {darkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
