import { ChartControls } from "-/components/chart-controls";
import { DataChart } from "-/components/data-chart";
import { PageTitle } from "-/components/page-title";
import { ChartProvider } from "-/components/providers/chart-provider";
import { ChartContainer } from "-/components/shadcn/chart";
import { CHART_CONFIG } from "-/lib/constants";

export const IndexPage = () => {
	return (
		<ChartProvider>
			<main className="grid grid-rows-[auto_1fr] gap-8 p-8 sm:px-16 sm:py-16 xl:px-24">
				<div className="flex items-center justify-between gap-4">
					<PageTitle>Total US Population per Year</PageTitle>
					<ChartControls />
				</div>
				<ChartContainer
					className="max-h-[80dvh] w-full"
					config={CHART_CONFIG}
				>
					<DataChart />
				</ChartContainer>
			</main>
		</ChartProvider>
	);
};
