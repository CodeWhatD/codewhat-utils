import { isArray, isObject } from '../checkTypes'
/**
 * 
 * @param source need converted element or object keys 
 * @param separator use for split element jonier
 * @returns string
 */
export const segment = (source: Array<unknown> | Record<string, unknown>, separator: string) => {

    if (!separator) return
    if (!isArray(source) || !isObject(source)) {
        throw new Error('source params need Array or Object')
    }
    if (isArray(source)) {
        const needConvertedArray = source.map(_source => {
            if (isObject(_source)) {
                return _source.toString()
            }
            return _source
        })
        return needConvertedArray.join(separator)
    } else if (isObject(source)) {
        const needConvertedArray = Object.keys(source)
        return needConvertedArray.join(separator)
    }
}
