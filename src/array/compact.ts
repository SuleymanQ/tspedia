
/**
 * @description Creates an array with all falsey values removed. 
 *      The values false, null, 0, "", undefined, and NaN are falsey.
 * 
 * ```ts
 * compact([0,3,false, '', NaN, 5])
 * // => [0,3,5]
 * ```
 */

 export function compact (arr: any[]): any[] { 
     return arr.filter(e => !!e !== false) 
}
