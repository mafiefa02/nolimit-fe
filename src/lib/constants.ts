import type { ChartConfig } from "-/components/shadcn/chart";

export const API_URL =
	"https://api.worldbank.org/v2/country/US/indicator/SP.POP.TOTL";

export const CHART_CONFIG = {
	population: {
		label: "Population",
		color: "#2b7fff",
	},
} satisfies ChartConfig;
