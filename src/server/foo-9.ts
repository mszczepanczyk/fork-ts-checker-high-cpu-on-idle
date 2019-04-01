import foo10, { Foo10 } from './foo-10'
import foo11, { Foo11 } from './foo-11'
import foo12, { Foo12 } from './foo-12'
import foo13, { Foo13 } from './foo-13'
import foo14, { Foo14 } from './foo-14'
import foo15, { Foo15 } from './foo-15'
import foo16, { Foo16 } from './foo-16'
import foo17, { Foo17 } from './foo-17'
import foo18, { Foo18 } from './foo-18'
import foo19, { Foo19 } from './foo-19'

const foo = 1 + foo10 + foo11 + foo12 + foo13 + foo14 + foo15 + foo16 + foo17 + foo18 + foo19
export type Foo9 =
  & Foo10
  & Foo11
  & Foo12
  & Foo13
  & Foo14
  & Foo15
  & Foo16
  & Foo17
  & Foo18
  & Foo19
  & { foo9: number }
export default foo
