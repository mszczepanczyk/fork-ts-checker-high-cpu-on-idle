import foo100, { Foo100 } from './foo-100'

const foo = 1 + foo100
export type Foo99 =
  & Foo100
  & { foo99: number }
export default foo
