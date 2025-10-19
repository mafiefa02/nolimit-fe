import { type QueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getChartDataOptions } from "-/lib/query-options/chart";
import type { ApiParams, ApiResponse } from "-/lib/types";

export const useGetChartData = (
	params: ApiParams,
	options?: QueryOptions<ApiResponse, Error>,
) => {
	const queryOption = getChartDataOptions(params, options);
	return useSuspenseQuery<ApiResponse, Error>(queryOption);
};
