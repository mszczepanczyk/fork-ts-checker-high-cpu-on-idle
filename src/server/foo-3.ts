import foo4, { Foo4 } from './foo-4'
import foo5, { Foo5 } from './foo-5'
import foo6, { Foo6 } from './foo-6'
import foo7, { Foo7 } from './foo-7'
import foo8, { Foo8 } from './foo-8'
import foo9, { Foo9 } from './foo-9'
import foo10, { Foo10 } from './foo-10'
import foo11, { Foo11 } from './foo-11'
import foo12, { Foo12 } from './foo-12'
import foo13, { Foo13 } from './foo-13'

const foo = 1 + foo4 + foo5 + foo6 + foo7 + foo8 + foo9 + foo10 + foo11 + foo12 + foo13
export type Foo3 =
  & Foo4
  & Foo5
  & Foo6
  & Foo7
  & Foo8
  & Foo9
  & Foo10
  & Foo11
  & Foo12
  & Foo13
  & { foo3: number }
export default foo
