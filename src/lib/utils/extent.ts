export function extent(values: number[]): [number, number] {
	return [Math.min(...values), Math.max(...values)];
}
