import foo21, { Foo21 } from './foo-21'
import foo22, { Foo22 } from './foo-22'
import foo23, { Foo23 } from './foo-23'
import foo24, { Foo24 } from './foo-24'
import foo25, { Foo25 } from './foo-25'
import foo26, { Foo26 } from './foo-26'
import foo27, { Foo27 } from './foo-27'
import foo28, { Foo28 } from './foo-28'
import foo29, { Foo29 } from './foo-29'
import foo30, { Foo30 } from './foo-30'

const foo = 1 + foo21 + foo22 + foo23 + foo24 + foo25 + foo26 + foo27 + foo28 + foo29 + foo30
export type Foo20 =
  & Foo21
  & Foo22
  & Foo23
  & Foo24
  & Foo25
  & Foo26
  & Foo27
  & Foo28
  & Foo29
  & Foo30
  & { foo20: number }
export default foo
