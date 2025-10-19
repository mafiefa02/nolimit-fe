import { useChart } from "-/hooks/use-chart";
import type { ChartType } from "-/lib/types";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./shadcn/select";

export const ChartTypeControl = () => {
	const { chart, setChart } = useChart();
	return (
		<Select
			onValueChange={(value: ChartType) => setChart("type", value)}
			value={chart.type}
		>
			<SelectTrigger>
				<SelectValue placeholder="Theme" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="line">Line</SelectItem>
				<SelectItem value="pie">Pie</SelectItem>
			</SelectContent>
		</Select>
	);
};
