interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('full time!!');
  }

  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('part time!!');
  }

  workPartTime() {}
}

function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const minto = new FullTimeEmployee();
const bob = new PartTimeEmployee();

const ellieAfterPay = pay(minto);
const bobAfterPay = pay(bob);

const obj = {
  name: 'ellie',
  age: 20
};

const obj2 = {
  animal: '강아지'
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name'));
console.log(getValue(obj2, 'animal'));
