import foo99, { Foo99 } from './foo-99'
import foo100, { Foo100 } from './foo-100'

const foo = 1 + foo99 + foo100
export type Foo98 =
  & Foo99
  & Foo100
  & { foo98: number }
export default foo
