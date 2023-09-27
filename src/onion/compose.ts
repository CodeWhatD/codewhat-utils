import type { MiddleWare } from './types'
export const compose = function (middlewarefns: MiddleWare) {
    return function (context: Record<string, any>, next?: any) {
        let index = -1
        return dispatch(0)
        function dispatch(i: number) {
            if (i <= index) return Promise.reject(new Error('next() called multiple times'))
            index = i
            let fn = middlewarefns[i]
            if (i === middlewarefns.length) fn = next
            if (!fn) return Promise.resolve()
            try {
                return Promise.resolve(fn(context, function next() {
                    return dispatch(i + 1)
                }))
            } catch (err) {
                return Promise.reject(err)
            }
        }
    }
}