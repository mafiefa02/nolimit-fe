import { ChartContext } from "-/contexts/chart-context";
import { useContext } from "react";

export const useChart = () => {
	const context = useContext(ChartContext);
	if (!context) throw new Error("useChart must be used within a ChartProvider");
	return context;
};
