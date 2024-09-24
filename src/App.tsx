import Container from "./components/atoms/Container";
import FirstSection from "./components/templates/FirstSection";
import SecondSection from "./components/templates/SecondSection";
import ThirdSection from "./components/templates/ThirdSection";

function App() {
  return (
    <>
      <Container>
        <FirstSection />
      </Container>
      <SecondSection />
      <ThirdSection />
    </>
  );
}

export default App;
