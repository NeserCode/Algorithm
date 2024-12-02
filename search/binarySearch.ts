export const binarySearch = (arr: number[], target: number) => {
	let left = 0
	let right = arr.length - 1
	if (arr.length <= 0) return -1
	if (arr.length === 1) return arr[0] === target ? 0 : -1
	if (arr[left] > target || arr[right] < target) return -1
	if (arr[left] === target) return left
	if (arr[right] === target) return right

	while (left <= right) {
		const mid = Math.floor((left + right) / 2)
		if (arr[mid] === target) return mid
		if (arr[mid] < target) left = mid + 1
		else right = mid - 1
	}

	return -1
}
