/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Extends an object with properties from one or more source objects.
 * Similar to jQuery's extend method.
 *
 * @param deep - If true, performs a deep merge (recursive). If false or not provided, performs a shallow merge.
 * @param target - The target object to extend. If not provided, a new object will be created.
 * @param sources - One or more source objects to copy properties from.
 * @returns The extended target object.
 *
 * @example
 * // Shallow merge
 * const obj1 = { a: 1, b: 2 };
 * const obj2 = { b: 3, c: 4 };
 * const result = extend(obj1, obj2);
 * // result: { a: 1, b: 3, c: 4 }
 *
 * @example
 * // Deep merge
 * const obj1 = { a: 1, nested: { x: 10 } };
 * const obj2 = { nested: { y: 20 } };
 * const result = extend(true, obj1, obj2);
 * // result: { a: 1, nested: { x: 10, y: 20 } }
 */

export function extend<T extends Record<string, any>>(deep: boolean, target: T, ...sources: Partial<T>[]): T;
export function extend<T extends Record<string, any>>(target: T, ...sources: Partial<T>[]): T;
export function extend<T extends Record<string, any>>(deepOrTarget: boolean | T, targetOrSource?: T | Partial<T>, ...sources: Partial<T>[]): T {
	let deep = false;
	let target: T;
	let sourceObjects: Partial<T>[];

	// Handle overloaded signatures
	if (typeof deepOrTarget === "boolean") {
		deep = deepOrTarget;
		target = (targetOrSource as T) || ({} as T);
		sourceObjects = sources;
	} else {
		target = deepOrTarget || ({} as T);
		sourceObjects = targetOrSource ? [targetOrSource as Partial<T>, ...sources] : sources;
	}

	// If no sources provided, return target as-is
	if (sourceObjects.length === 0) {
		return target;
	}

	// Helper function to check if a value is a plain object
	const isPlainObject = (obj: any): obj is Record<string, any> => {
		return obj !== null && typeof obj === "object" && !Array.isArray(obj) && Object.prototype.toString.call(obj) === "[object Object]";
	};

	// Process each source object
	for (const source of sourceObjects) {
		if (source == null) {
			continue;
		}

		for (const key in source) {
			if (!Object.prototype.hasOwnProperty.call(source, key)) {
				continue;
			}

			const sourceValue = source[key];
			const targetValue = target[key];

			if (deep && isPlainObject(sourceValue) && isPlainObject(targetValue)) {
				// Deep merge: recursively extend nested objects
				target[key] = extend(true, targetValue as Record<string, any>, sourceValue as Record<string, any>) as T[Extract<keyof T, string>];
			} else if (sourceValue !== undefined) {
				// Shallow merge: copy the value directly
				target[key] = sourceValue as T[Extract<keyof T, string>];
			}
		}
	}

	return target;
}
