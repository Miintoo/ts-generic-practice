{
  /*
    Type Aliases
  */
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'minto',
    age: 21
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let mintoName: Name;

  mintoName = 'name';
}
