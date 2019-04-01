import foo97, { Foo97 } from './foo-97'
import foo98, { Foo98 } from './foo-98'
import foo99, { Foo99 } from './foo-99'
import foo100, { Foo100 } from './foo-100'

const foo = 1 + foo97 + foo98 + foo99 + foo100
export type Foo96 =
  & Foo97
  & Foo98
  & Foo99
  & Foo100
  & { foo96: number }
export default foo
