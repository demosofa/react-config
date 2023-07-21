/* eslint-disable  @typescript-eslint/no-explicit-any */

export default function clone(value: any) {
	return JSON.parse(JSON.stringify(value));
}
