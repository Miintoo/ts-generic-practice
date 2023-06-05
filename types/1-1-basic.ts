{
  // number
  const num: number = 0.1;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = true;

  // undefined
  let age: number | undefined;
  age = undefined;

  // null
  let person: string | null;

  function find(): number | undefined {
    return 1;
  }

  // unknown 사용x
  let notSure: unknown = 0;

  // any 사용x
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello world');
  }

  // never
  function throwError(message: string): never {
    // 서버로 메세지
    // throw new Error(message);
    while (true) {}
  }

  // object 사용x
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'minto' });
}
