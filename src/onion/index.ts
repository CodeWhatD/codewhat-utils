import { compose } from './compose'
import type { Task, MiddleWare } from './types'
// this constructor class imitate koa onion module
class Onion {
    middleware: MiddleWare = []
    /**
     * register middleware
     */
    use(task: Task) {
        this.middleware.push(task)
        return this
    }
    /**
     * simulation http server listen
     */
    listen() {
        const fn = compose(this.middleware)
        fn(this)
    }
}

export default Onion