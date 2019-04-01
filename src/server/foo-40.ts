import foo41, { Foo41 } from './foo-41'
import foo42, { Foo42 } from './foo-42'
import foo43, { Foo43 } from './foo-43'
import foo44, { Foo44 } from './foo-44'
import foo45, { Foo45 } from './foo-45'
import foo46, { Foo46 } from './foo-46'
import foo47, { Foo47 } from './foo-47'
import foo48, { Foo48 } from './foo-48'
import foo49, { Foo49 } from './foo-49'
import foo50, { Foo50 } from './foo-50'

const foo = 1 + foo41 + foo42 + foo43 + foo44 + foo45 + foo46 + foo47 + foo48 + foo49 + foo50
export type Foo40 =
  & Foo41
  & Foo42
  & Foo43
  & Foo44
  & Foo45
  & Foo46
  & Foo47
  & Foo48
  & Foo49
  & Foo50
  & { foo40: number }
export default foo
