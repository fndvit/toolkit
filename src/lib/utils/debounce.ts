export function debounce<T extends any[]>(fn: (...args: T) => void, delay: number) {
	let timeout: number | NodeJS.Timeout;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const ret = (..._: T) => {
		clearTimeout(timeout);
		timeout = setTimeout(fn, delay);
	};
	ret.cancel = () => clearTimeout(timeout);
	return ret;
}
