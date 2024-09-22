export type TProfileInfos = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  extraLink: string;
};

export const ProfileInfos: TProfileInfos[] = [
  {
    id: "girl-info",
    imageUrl: "images/girl-ellipse.png",
    title: "Sed ut perspiciatis",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
    extraLink: "http://example.com",
  },
  {
    id: "man-info",
    imageUrl: "images/man-ellipse.png",
    title: "Lorem ipsum dolor",
    description:
      "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    extraLink: "http://example.com",
  },
  {
    id: "cat-info",
    imageUrl: "images/cat-ellipse.png",
    title: "Nemo enim ipsam",
    description:
      "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
    extraLink: "http://example.com",
  },
];
