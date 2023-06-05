{
  // JS
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TS
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // JS
  // function jsFetchNum(id) {
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TS
  // function FetchNum(id: string): Promise<number> {
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName('steve');

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2, 3, 4));
}
