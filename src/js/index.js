const func = () => {
  console.log();
};

document.addEventListener('DOMContentLoaded', () => {
  func();
  const r = new Rool();
  r.render()();
});

class Rool {
  render() {
    console.log(this);
    return () => 123;
  }

  render2() {
    console.log(this);
    console.log(123);
  }
}
