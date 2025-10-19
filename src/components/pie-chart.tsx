import type { ApiData } from "-/lib/types";
import { CartesianGrid, PieChart as Chart, Pie, XAxis, YAxis } from "recharts";
import {
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "./shadcn/chart";

export const PieChart = ({ data }: { data: ApiData[] }) => {
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
				tickFormatter={(value) => `${String(value).slice(0, 3)}M`}
				tickLine={false}
				tickMargin={10}
			/>
			<ChartTooltip content={<ChartTooltipContent />} />
			<ChartLegend content={<ChartLegendContent />} />
			{data.map((yearly) => (
				<Pie
					data={[
						yearly,
					]}
					dataKey="value"
					nameKey="date"
				/>
			))}
		</Chart>
	);
};
