import type { Chart } from "-/lib/types";
import { createContext } from "react";

type ChartContextType = {
	chart: Chart;
	setChart: <K extends keyof Chart>(key: K, newValue: Chart[K]) => void;
};

export const ChartContext = createContext<ChartContextType | null>(null);
