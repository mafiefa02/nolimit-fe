export type Year = `${number}${number}${number}${number}`;

export type ChartType = "line" | "pie";
export type ChartDateRange = `${Year}:${Year}`;

export type Chart = {
	type: ChartType;
	range: ChartDateRange | undefined;
};

export type ApiParams = {
	date: ChartDateRange;
};

export type IndicatorData = {
	id: string;
	value: string;
};
export type CountryData = {
	id: string;
	value: string;
};

export interface ApiData {
	indicator: IndicatorData;
	country: CountryData;
	countryiso3code: string;
	date: string;
	value: number;
	unit: string;
	obs_status: string;
	decimal: number;
}

export type ApiResponseMetadata = {
	page: number;
	pages: number;
	per_page: number;
	total: number;
	sourceid: string;
	lastupdated: string;
};

export type ApiResponse = [
	ApiResponseMetadata,
	ApiData[],
];
