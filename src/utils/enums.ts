export const ChartType = {
	Bar: "Bar",
	Line: "Line",
} as const;

export type ChartType = (typeof ChartType)[keyof typeof ChartType];
