export default function Tabs({ children, buttons, buttonsContainer: ButtonsContainer = "menu" }) {
//React only allows capitalized identifiers to be used as component or element tags in JSX.
  return (
    <>
      <ButtonsContainer> {buttons} </ButtonsContainer>
      {children}
    </>
  );
}
