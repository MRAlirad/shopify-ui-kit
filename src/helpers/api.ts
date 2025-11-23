// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleQueryKey = ({ queryKey, params = {} }: { queryKey: string | any[]; params: object }) => {
	const hasParams = Object.keys(params).length > 0;

	if (Array.isArray(queryKey) && hasParams) return [...queryKey, params];
	if (Array.isArray(queryKey) && !hasParams) return queryKey;
	if (!Array.isArray(queryKey) && hasParams) return [queryKey, params];
	if (!Array.isArray(queryKey) && !hasParams) return [queryKey];
	return [queryKey];
};
