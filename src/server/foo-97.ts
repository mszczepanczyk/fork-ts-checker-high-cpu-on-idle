import foo98, { Foo98 } from './foo-98'
import foo99, { Foo99 } from './foo-99'
import foo100, { Foo100 } from './foo-100'

const foo = 1 + foo98 + foo99 + foo100
export type Foo97 =
  & Foo98
  & Foo99
  & Foo100
  & { foo97: number }
export default foo
