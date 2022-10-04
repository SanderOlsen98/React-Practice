import { useContext } from "react";
import colours from "../../constants/colours";
import AppContext from "../../context/AppContext";

export default function ColourSelector() {
	const [colour, setColour] = useContext(AppContext);

	function handleChange(event) {
		setColour(event.target.value);
	}

	return (
		<select value={colour} onChange={handleChange}>
			<option value="">Select colour</option>
			{colours.map((colour) => (
				<option key={colour.value} value={colour.value}>
					{colour.label}
				</option>
			))}
		</select>
	);
}