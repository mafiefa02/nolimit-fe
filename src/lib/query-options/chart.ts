import { type QueryOptions, queryOptions } from "@tanstack/react-query";
import { API_URL } from "../constants";
import { chartQueryKey } from "../query-key/chart";

import type { ApiParams, ApiResponse } from "../types";

export const getChartDataOptions = (
	params: ApiParams,
	options?: QueryOptions<ApiResponse, Error>,
) =>
	queryOptions<ApiResponse, Error>({
		...options,
		queryKey: chartQueryKey.get(params),
		queryFn: async () => {
			const res = await fetch(
				`${API_URL}?format=json&date=${params.date}&per_page=${params.date.split(":")[1]}`,
			).catch((e) => {
				const error = e as Error;
				throw new Error(error.message);
			});

			if (!res.ok) {
				throw new Error("Something went wrong");
			}

			const data = (await res.json()) as ApiResponse;
			return data;
		},
	});
