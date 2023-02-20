import { useId } from 'react';

// useId is useful in that it will give us back a unique identifier that will be consistent, in this case within this label input pair and then can be used multiple times across various different renders

// Don't use uesId multiple times inside of one component because it's not necessary

function LabelInputPair() {
  const id = useId();
  return (
    <div style={{ marginBottom: '50px' }}>
      <label htmlFor={id}>
        Click on this label and it'll highlight the input {id}
      </label>
      <br />
      <input type="text" id={id} placeholder={`input id ${id}`} />
    </div>
  );
}

export default function UseIdComponent() {
  return (
    <>
      <LabelInputPair />
      <LabelInputPair />
      <LabelInputPair />
      <LabelInputPair />
    </>
  );
}
