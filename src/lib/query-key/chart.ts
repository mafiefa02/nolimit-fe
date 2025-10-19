import type { ApiParams } from "../types";

export const chartQueryKey = {
	get: (params: ApiParams) => [
		"chart",
		params,
	],
};
