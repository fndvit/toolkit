export function range(start: number, end: number) {
	const length = Math.abs(end - start);
	if (length === 0) return [];
	const step = start < end ? 1 : -1;
	return Array.from({ length }, (_, i) => start + i * step);
}
