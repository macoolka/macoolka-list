import A,{list} from '..';
import test from 'macoolka-collection/lib/testSuite'
describe('List', () => {
    test(A,{immutable:true})
    test(list,{immutable:false})
})
