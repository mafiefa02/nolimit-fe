import { useChart } from "-/hooks/use-chart";
// 'parse' is removed as it's not needed, 'format' is also removed.
import type { ChartDateRange } from "-/lib/types";
import { useEffect, useMemo, useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./shadcn/select";

export const ChartDateControl = () => {
	const { chart, setChart } = useChart();

	const [initialStart, initialEnd] = chart.range?.split(":") ?? [
		undefined,
		undefined,
	];

	const [startDate, setStartDate] = useState(initialStart);
	const [endDate, setEndDate] = useState(initialEnd);

	useEffect(() => {
		const [start, end] = chart.range?.split(":") ?? [
			undefined,
			undefined,
		];
		setStartDate(start);
		setEndDate(end);
	}, [
		chart.range,
	]);

	useEffect(() => {
		if (startDate && endDate) {
			const newRange = `${startDate}:${endDate}` as ChartDateRange;

			if (newRange !== chart.range) {
				setChart("range", newRange);
			}
		}
	}, [
		startDate,
		endDate,
		setChart,
		chart.range,
	]);

	const allDates = useMemo(() => {
		const startYear = 1900;
		// Generate years up to the current year + 10
		const endYear = new Date().getFullYear() + 10;
		const length = endYear - startYear + 1;
		return Array.from(
			{
				length,
			},
			(_, i) => i + startYear,
		);
	}, []);

	const startDates = allDates;

	const endDates = useMemo(() => {
		if (!startDate) return allDates;
		const startYear = parseInt(startDate, 10);
		return allDates.filter((date) => date >= startYear);
	}, [
		allDates,
		startDate,
	]);

	const handleStartDateChange = (value: string) => {
		setStartDate(value);
		if (endDate && parseInt(value, 10) > parseInt(endDate, 10)) {
			setEndDate(undefined);
		}
	};

	return (
		<>
			<Select
				onValueChange={handleStartDateChange}
				value={startDate}
			>
				<SelectTrigger>
					<SelectValue placeholder="Start date" />
				</SelectTrigger>
				<SelectContent>
					{startDates.map((date) => (
						<SelectItem
							key={`${date}-start`}
							value={date.toString()}
						>
							{date}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			<Select
				onValueChange={setEndDate}
				value={endDate}
			>
				<SelectTrigger>
					<SelectValue placeholder="End date" />
				</SelectTrigger>
				<SelectContent>
					{/* Use the filtered endDates list */}
					{endDates.map((date) => (
						<SelectItem
							key={`${date}-end`}
							value={date.toString()}
						>
							{date}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</>
	);
};
