import foo18, { Foo18 } from './foo-18'
import foo19, { Foo19 } from './foo-19'
import foo20, { Foo20 } from './foo-20'
import foo21, { Foo21 } from './foo-21'
import foo22, { Foo22 } from './foo-22'
import foo23, { Foo23 } from './foo-23'
import foo24, { Foo24 } from './foo-24'
import foo25, { Foo25 } from './foo-25'
import foo26, { Foo26 } from './foo-26'
import foo27, { Foo27 } from './foo-27'

const foo = 1 + foo18 + foo19 + foo20 + foo21 + foo22 + foo23 + foo24 + foo25 + foo26 + foo27
export type Foo17 =
  & Foo18
  & Foo19
  & Foo20
  & Foo21
  & Foo22
  & Foo23
  & Foo24
  & Foo25
  & Foo26
  & Foo27
  & { foo17: number }
export default foo
