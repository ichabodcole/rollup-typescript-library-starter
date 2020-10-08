export class HelloWorld {
  private msg: string;

  constructor(msg: string) {
    this.msg = msg;
  }

  sayHello(): string {
    const helloMsg = `Hello World, and ${this.msg}`;
    console.log(helloMsg);
    return helloMsg;
  }
}

export default HelloWorld;
