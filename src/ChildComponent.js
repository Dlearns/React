import { AnotherChildComponent } from "./AnotherChildComponent";
export const ChildComponent = (props) => {
  const { firstName } = props;

  return (
    <>
      <br />
      <label>Another child component: </label>
      <AnotherChildComponent firstName={firstName} />
    </>
  );
};
