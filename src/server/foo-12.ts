import foo13, { Foo13 } from './foo-13'
import foo14, { Foo14 } from './foo-14'
import foo15, { Foo15 } from './foo-15'
import foo16, { Foo16 } from './foo-16'
import foo17, { Foo17 } from './foo-17'
import foo18, { Foo18 } from './foo-18'
import foo19, { Foo19 } from './foo-19'
import foo20, { Foo20 } from './foo-20'
import foo21, { Foo21 } from './foo-21'
import foo22, { Foo22 } from './foo-22'

const foo = 1 + foo13 + foo14 + foo15 + foo16 + foo17 + foo18 + foo19 + foo20 + foo21 + foo22
export type Foo12 =
  & Foo13
  & Foo14
  & Foo15
  & Foo16
  & Foo17
  & Foo18
  & Foo19
  & Foo20
  & Foo21
  & Foo22
  & { foo12: number }
export default foo
