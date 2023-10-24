export function getXRandItems<T>(items: T[], x: number): T[] {
	const _items = [...items];
	const result: T[] = [];
	for (let i = 0; i < Math.min(x, items.length); i++) {
		const index = Math.floor(Math.random() * _items.length);
		result.push(_items[index]);
		_items.splice(index, 1);
	}
	return result;
}
