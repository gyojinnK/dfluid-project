import { render } from "@testing-library/react";
import SecondSection from "../components/templates/SecondSection";

test("이미지 API 동작 테스트", async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM"
  );

  expect(response.status).toBe(200);
  expect(response.statusText).toBe("OK");
  expect(await response.json()).toEqual({
    id: "1",
    urls: {
      raw: "https://images.unsplash.com/photo-1726571175984-96bae5054c26?ixid=M3wyNTAyMTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDc4NzV8&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1726571175984-96bae5054c26?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyNTAyMTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDc4NzV8&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1726571175984-96bae5054c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNTAyMTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDc4NzV8&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1726571175984-96bae5054c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNTAyMTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDc4NzV8&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1726571175984-96bae5054c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNTAyMTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDc4NzV8&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1726571175984-96bae5054c26",
    },
  });
});

test("valid/invalid 케이스의 유효성 검증과 스타일 변경 테스트", async () => {
  render(<SecondSection />);
});
