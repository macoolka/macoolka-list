/**
 * Macoolka Collection Instance for `immutable` List
 * @file
 */
import { List } from 'immutable'
import init from 'macoolka-collection/lib/Collection'
declare module 'fp-ts/lib/HKT' {
    interface URItoKind<A> {
        List: List<A>
    }
}
export {
    List
}
/**
 * @since 0.2.0
 */
export const URI = 'List'

/**
 * @since 0.2.0
 */
export type URI = typeof URI
/**
 * Macoolka Collection instance for `immutable` List
 * @since 0.2.0
 */
export const list = init<URI>({
    URI,
    from: as => List(as),
    size: as => as.size,
    _getAt: i => as => as.get(i),
    getiterator: as => as.values(),
    reverse: as => as.reverse(),
    _deleteAt: i => as => as.delete(i),
    _insertAt: (i, v) => as => (i >= 0 && i <= as.size) ? as.insert(i, v) : as,
    _setAt: (i, v) => as => (i >= 0 && i < as.size) ? as.set(i, v) : as,
    slice: (start, end) => value => value.slice(start, end)
})
/**
 * Macoolka Collection instance for `immutable` List(safe mode)
 * @since 0.2.0
 */
const listSafe = init<URI>({
    URI,
    from: as => List(as),
    size: as => as.size,
    _getAt: i => as => as.get(i),
    getiterator: as => as.values(),
    reverse: as => as.reverse(),
    _deleteAt: i => as => as.delete(i),
    _insertAt: (i, v) => as => (i >= 0 && i <= as.size) ? as.insert(i, v) : as,
    _setAt: (i, v) => as => (i >= 0 && i < as.size) ? as.set(i, v) : as,
    slice: (start, end) => value => value.slice(start, end)
},true)
export default listSafe
