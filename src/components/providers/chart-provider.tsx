import { ChartContext } from "-/contexts/chart-context";
import type { Chart } from "-/lib/types";
import { useState } from "react";

const INITIAL_CHART: Chart = {
	type: "line",
	range: "1960:2024",
};

export const ChartProvider = ({ children }: { children: React.ReactNode }) => {
	const [chart, setChart] = useState<Chart>(INITIAL_CHART);

	const setChartFn = <K extends keyof Chart>(key: K, newValue: Chart[K]) =>
		setChart((prevChart) => ({
			...prevChart,
			[key]: newValue,
		}));

	return (
		<ChartContext.Provider
			value={{
				chart,
				setChart: setChartFn,
			}}
		>
			{children}
		</ChartContext.Provider>
	);
};
