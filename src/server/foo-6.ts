import foo7, { Foo7 } from './foo-7'
import foo8, { Foo8 } from './foo-8'
import foo9, { Foo9 } from './foo-9'
import foo10, { Foo10 } from './foo-10'
import foo11, { Foo11 } from './foo-11'
import foo12, { Foo12 } from './foo-12'
import foo13, { Foo13 } from './foo-13'
import foo14, { Foo14 } from './foo-14'
import foo15, { Foo15 } from './foo-15'
import foo16, { Foo16 } from './foo-16'

const foo = 1 + foo7 + foo8 + foo9 + foo10 + foo11 + foo12 + foo13 + foo14 + foo15 + foo16
export type Foo6 =
  & Foo7
  & Foo8
  & Foo9
  & Foo10
  & Foo11
  & Foo12
  & Foo13
  & Foo14
  & Foo15
  & Foo16
  & { foo6: number }
export default foo
