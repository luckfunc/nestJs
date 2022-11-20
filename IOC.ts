class A {
  name: string
  constructor(name: string) {
    this.name = name;
  }
}

class C {
  name: string
  constructor(name: string) {
    this.name = name;
  }
}

class Container {
  mo: any
  constructor() {
    this.mo = {}

  }

  provide(key: string, mo: any) {
    this.mo[key] = mo;
  }

  get(key: string) {
    return this.mo[key];
  }

}

const mo = new Container();
mo.provide('xdd', new A('嘿嘿'));
mo.provide('xjd', new A('哈哈'));

class B {

  xdd: any
  xjd: any
  constructor(mo: Container) {
    this.xdd = mo.get('xdd');
    this.xjd = mo.get('xjd');
    
  }

}