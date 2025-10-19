import { useGetChartData } from "-/hooks/queries/use-get-chart-data";
import { useChart } from "-/hooks/use-chart";
import { LineChart } from "./line-chart";
import { PieChart } from "./pie-chart";

export const DataChart = () => {
	const { chart } = useChart();
	const { data } = useGetChartData({
		date: chart.range ?? "1960:2024",
	});

	const chartData = data[1];

	switch (chart.type) {
		case "line":
			return <LineChart data={chartData} />;
		case "pie":
			return <PieChart data={chartData} />;
		default:
			return <LineChart data={chartData} />;
	}
};
