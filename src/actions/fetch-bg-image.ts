import axios from "axios";

export const fetchBgImage = async () => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?client_id=${
        import.meta.env.VITE_ACCESS_KEY
      }`
    );
    console.log("call!");
    const data = response.data;
    const imageUrl = data.urls.regular;
    localStorage.setItem("bgImage", imageUrl);
  } catch (error) {
    console.error("이미지 fetch 에러:", error);
  }
};
