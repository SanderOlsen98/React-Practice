import { useContext } from "react";
import AppContext from "../../context/AppContext";

export default function Footer() {
	const [colour] = useContext(AppContext);

	return <footer style={{ backgroundColor: colour }}>Footer</footer>;
}