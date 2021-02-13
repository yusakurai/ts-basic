// keyof
interface User {
  name: string;
  age: number;
}
export const User: User = { name: 'hoge', age: 1 };
export const UserKeyOfName: keyof User = 'name';

// プロパティを省略可能な型に変更できる
type Flags = {
  x: boolean;
  y: boolean;
};
type PartialFlags = { [K in keyof Flags]?: Flags[K] };

// Error: Property 'y' is missing in type '{ x: true; }' but required in type 'Flags'.
// const flag1: Flags = {
//   x: true,
// };

// OK
const flag2: PartialFlags = {
  x: true,
};
