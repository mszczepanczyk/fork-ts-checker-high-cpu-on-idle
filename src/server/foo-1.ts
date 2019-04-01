import foo2, { Foo2 } from './foo-2'
import foo3, { Foo3 } from './foo-3'
import foo4, { Foo4 } from './foo-4'
import foo5, { Foo5 } from './foo-5'
import foo6, { Foo6 } from './foo-6'
import foo7, { Foo7 } from './foo-7'
import foo8, { Foo8 } from './foo-8'
import foo9, { Foo9 } from './foo-9'
import foo10, { Foo10 } from './foo-10'
import foo11, { Foo11 } from './foo-11'

const foo = 1 + foo2 + foo3 + foo4 + foo5 + foo6 + foo7 + foo8 + foo9 + foo10 + foo11
export type Foo1 =
  & Foo2
  & Foo3
  & Foo4
  & Foo5
  & Foo6
  & Foo7
  & Foo8
  & Foo9
  & Foo10
  & Foo11
  & { foo1: number }
export default foo
