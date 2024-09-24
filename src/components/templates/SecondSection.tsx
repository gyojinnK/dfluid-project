import { useEffect, useState } from "react";
import Container from "../atoms/Container";
import InputGroup from "../organisms/InputGroup";
import TextContent from "../organisms/TextContent";
import paperPlaneTrue from "/icons/paper-plane-true.svg";
import paperPlaneFalse from "/icons/paper-plane-false.svg";
import { Letter } from "../../constants/second-section-letters";
import { fetchBgImage } from "../../services/fetch-bg-image";

const SecondSection = () => {
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const validateEmailHandler = (value: string) => {
    setEmail(value);
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const newTimeout = setTimeout(() => {
      if (value === "") {
        setIsValidEmail(null);
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(value));
      }
    }, 300);

    setDebounceTimeout(newTimeout);
  };

  useEffect(() => {
    let savedBgImage = localStorage.getItem("bgImage");
    if (savedBgImage) {
      setBgImage(savedBgImage);
    } else {
      fetchBgImage().then((imageUrl: string) => {
        setBgImage(imageUrl);
        localStorage.setItem("bgImage", imageUrl);
      });
    }
  }, []);

  return (
    <div
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="pb-[5.9375rem]">
        <TextContent position="center" letter={Letter} />
      </Container>
      <div className="text-center">
        <InputGroup linkText="email">
          <InputGroup.Label className="text-[#ffffff] pb-[1rem]">
            Subscribe to our newsletter
          </InputGroup.Label>
          <div className="pb-[9.5rem]">
            <div
              className={`mx-auto flex justify-between items-center w-[31.25rem] rounded-[0.4375rem] backdrop-blur bg-[rgba(255,255,255,0.1)] border ${
                isValidEmail === null
                  ? "border-[#ffffff]"
                  : isValidEmail
                  ? "border-[#00C300]"
                  : "border-[#ff6633]"
              }`}
            >
              <InputGroup.Input
                className="text-[#ffffff] placeholder-[#ffffff] w-full"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => validateEmailHandler(e.target.value)}
              />
              {isValidEmail || isValidEmail === null ? (
                <img
                  src={paperPlaneTrue}
                  alt="paper-plane"
                  className="pr-[0.5625rem] py-[0.5625rem]"
                />
              ) : (
                <img
                  src={paperPlaneFalse}
                  alt="paper-plane"
                  className="pr-[0.5625rem] py-[0.5625rem]"
                />
              )}
              {!isValidEmail && email !== "" && (
                <p className="font-['Exo2'] text-[#ff6633] absolute bottom-[-2rem] left-[1rem]">
                  Please enter a valid email!
                </p>
              )}
            </div>
          </div>
        </InputGroup>
      </div>
    </div>
  );
};

export default SecondSection;
