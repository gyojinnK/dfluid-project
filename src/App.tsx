import Container from "./components/atoms/Container";
import FirstSection from "./components/templates/FirstSection";
import SecondSection from "./components/templates/SecondSection";

function App() {
  return (
    <>
      <Container>
        <FirstSection />
      </Container>
      <SecondSection />
    </>
  );
}

export default App;
