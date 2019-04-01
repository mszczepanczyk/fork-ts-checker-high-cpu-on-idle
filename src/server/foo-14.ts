import foo15, { Foo15 } from './foo-15'
import foo16, { Foo16 } from './foo-16'
import foo17, { Foo17 } from './foo-17'
import foo18, { Foo18 } from './foo-18'
import foo19, { Foo19 } from './foo-19'
import foo20, { Foo20 } from './foo-20'
import foo21, { Foo21 } from './foo-21'
import foo22, { Foo22 } from './foo-22'
import foo23, { Foo23 } from './foo-23'
import foo24, { Foo24 } from './foo-24'

const foo = 1 + foo15 + foo16 + foo17 + foo18 + foo19 + foo20 + foo21 + foo22 + foo23 + foo24
export type Foo14 =
  & Foo15
  & Foo16
  & Foo17
  & Foo18
  & Foo19
  & Foo20
  & Foo21
  & Foo22
  & Foo23
  & Foo24
  & { foo14: number }
export default foo
