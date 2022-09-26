import { createContext } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [colour, setColour] = useLocalStorage("colour", "");
	return <AppContext.Provider value={[colour, setColour]}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
	children: PropTypes.node,
};

export default AppContext;