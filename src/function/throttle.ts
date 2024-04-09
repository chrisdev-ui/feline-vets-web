export function throttle<T extends (...args: any[]) => any>(
	mainFunction: T,
	delay: number
): T & { cancel: () => void } {
	let timerFlag: ReturnType<typeof setTimeout> | null = null
	let cancelled = false

	const throttledFunction = (...args: Parameters<T>): ReturnType<T> | void => {
		if (cancelled) return
		if (timerFlag === null) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const result = mainFunction(...args)
			timerFlag = setTimeout(() => {
				timerFlag = null
			}, delay)
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return result
		}
	}

	throttledFunction.cancel = () => {
		if (timerFlag !== null) {
			clearTimeout(timerFlag)
			timerFlag = null
		}
		cancelled = true
	}

	return throttledFunction as T & { cancel: () => void }
}
