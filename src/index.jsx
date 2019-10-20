import { h, Fragment, render } from "preact";
import { useCallback, useLayoutEffect, useState } from "preact/hooks";

const Foo = () => {
  useLayoutEffect(() => {
    return () => {
      console.log(document.body.innerHTML);
    };
  }, []);

  return (
    <div>
      <p>Foo</p>
    </div>
  );
};

const Bar = () => {
  useLayoutEffect(() => {
    return () => {
      console.log(document.body.innerHTML);
    };
  }, []);

  return (
    <div>
      <p>Bar</p>
    </div>
  );
};

function App() {
  const [current, setCurrent] = useState("/foo");

  const onClick = useCallback(
    e => {
      e.preventDefault();
      setCurrent(e.target.getAttribute("href"));
    },
    [setCurrent]
  );

  return (
    <Fragment>
      <button onClick={onClick} href={current === "/foo" ? "/bar" : "/foo"}>
        Next
      </button>

      {current === "/foo" && <Foo />}
      {current === "/bar" && <Bar />}
    </Fragment>
  );
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
