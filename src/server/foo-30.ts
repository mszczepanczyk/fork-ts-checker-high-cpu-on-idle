import foo31, { Foo31 } from './foo-31'
import foo32, { Foo32 } from './foo-32'
import foo33, { Foo33 } from './foo-33'
import foo34, { Foo34 } from './foo-34'
import foo35, { Foo35 } from './foo-35'
import foo36, { Foo36 } from './foo-36'
import foo37, { Foo37 } from './foo-37'
import foo38, { Foo38 } from './foo-38'
import foo39, { Foo39 } from './foo-39'
import foo40, { Foo40 } from './foo-40'

const foo = 1 + foo31 + foo32 + foo33 + foo34 + foo35 + foo36 + foo37 + foo38 + foo39 + foo40
export type Foo30 =
  & Foo31
  & Foo32
  & Foo33
  & Foo34
  & Foo35
  & Foo36
  & Foo37
  & Foo38
  & Foo39
  & Foo40
  & { foo30: number }
export default foo
