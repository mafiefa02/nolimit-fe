import { ChartDateControl } from "./chart-date-control";
import { ChartTypeControl } from "./chart-type-control";
import { ButtonGroup } from "./shadcn/button-group";

export const ChartControls = () => {
	return (
		<ButtonGroup>
			<ChartTypeControl />
			<ChartDateControl />
		</ButtonGroup>
	);
};
