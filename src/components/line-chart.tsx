import type { ApiData } from "-/lib/types";
import {
	CartesianGrid,
	LineChart as Chart,
	Line,
	XAxis,
	YAxis,
} from "recharts";
import { ChartTooltip, ChartTooltipContent } from "./shadcn/chart";

export const LineChart = ({ data }: { data: ApiData[] }) => {
	return (
		<Chart data={data}>
			<CartesianGrid />
			<XAxis
				axisLine={false}
				dataKey="date"
				tickLine={false}
				tickMargin={10}
			/>
			<YAxis
				axisLine={false}
				dataKey="value"
				tickFormatter={(value) => `${Math.round(value / 1000000)}M`}
				tickLine={false}
				tickMargin={10}
			/>
			<ChartTooltip content={<ChartTooltipContent />} />
			<Line
				dataKey="value"
				name="Population"
				radius={4}
			/>
		</Chart>
	);
};
