import axios from "axios";

export const fetchBgImage = async () => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM`
    );
    console.log("call!");
    const data = response.data;
    const imageUrl = data.urls.regular;
    localStorage.setItem("bgImage", imageUrl);
    return imageUrl;
  } catch (error) {
    console.error("이미지 fetch 에러:", error);
  }
};
