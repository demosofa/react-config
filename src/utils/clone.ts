/* eslint-disable  @typescript-eslint/no-explicit-any */

export function clone(value: any) {
	return JSON.parse(JSON.stringify(value));
}
