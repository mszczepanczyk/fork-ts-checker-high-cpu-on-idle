import foo81, { Foo81 } from './foo-81'
import foo82, { Foo82 } from './foo-82'
import foo83, { Foo83 } from './foo-83'
import foo84, { Foo84 } from './foo-84'
import foo85, { Foo85 } from './foo-85'
import foo86, { Foo86 } from './foo-86'
import foo87, { Foo87 } from './foo-87'
import foo88, { Foo88 } from './foo-88'
import foo89, { Foo89 } from './foo-89'
import foo90, { Foo90 } from './foo-90'

const foo = 1 + foo81 + foo82 + foo83 + foo84 + foo85 + foo86 + foo87 + foo88 + foo89 + foo90
export type Foo80 =
  & Foo81
  & Foo82
  & Foo83
  & Foo84
  & Foo85
  & Foo86
  & Foo87
  & Foo88
  & Foo89
  & Foo90
  & { foo80: number }
export default foo