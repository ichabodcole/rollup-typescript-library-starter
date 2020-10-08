import HelloWorld from '../src/HelloWorld';

describe('HelloWorld', () => {
  let helloWorld: HelloWorld;

  beforeEach(() => {
    helloWorld = new HelloWorld('hello my baby!');
  });

  it('sayHello', () => {
    const expected = 'Hello World, and hello my baby!';
    console.log = jest.fn();
    helloWorld.sayHello();

    expect(console.log).toHaveBeenCalledWith(expected);
  });
});
