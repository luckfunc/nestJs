
const doc: ParameterDecorator = (target: any, key: string | symbol, parameterIndex: number) => {
  console.log(target, key, parameterIndex );
}
class XDD {
  public name: string
  constructor() {
    this.name = 'xdd';
  }
  getName( @doc name: string, age: number) {
    return this.name;
  }
}
const xdd: any = new XDD();
console.log(xdd.name);

