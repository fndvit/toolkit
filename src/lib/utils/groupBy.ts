export function groupBy<T, K extends string | number>(
	arr: T[],
	keyFn: (d: T) => K
): { [KV in K]: T[] };

export function groupBy<T, K extends string | number, M>(
	arr: T[],
	keyFn: (d: T) => K,
	mapFn: (d: T) => M
): {
	[KV in K]: M[];
};

export function groupBy<T, K extends string | number, M>(
	arr: T[],
	keyFn: (d: T) => K,
	mapFn?: (d: T) => M
) {
	return arr.reduce((acc, item) => {
		const key = keyFn(item);
		acc[key] = acc[key] || [];
		acc[key].push(mapFn ? mapFn(item) : item);
		return acc;
	}, {} as any);
}
