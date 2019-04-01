import foo91, { Foo91 } from './foo-91'
import foo92, { Foo92 } from './foo-92'
import foo93, { Foo93 } from './foo-93'
import foo94, { Foo94 } from './foo-94'
import foo95, { Foo95 } from './foo-95'
import foo96, { Foo96 } from './foo-96'
import foo97, { Foo97 } from './foo-97'
import foo98, { Foo98 } from './foo-98'
import foo99, { Foo99 } from './foo-99'
import foo100, { Foo100 } from './foo-100'

const foo = 1 + foo91 + foo92 + foo93 + foo94 + foo95 + foo96 + foo97 + foo98 + foo99 + foo100
export type Foo90 =
  & Foo91
  & Foo92
  & Foo93
  & Foo94
  & Foo95
  & Foo96
  & Foo97
  & Foo98
  & Foo99
  & Foo100
  & { foo90: number }
export default foo
