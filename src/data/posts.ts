export type Project = {
  link: string;
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    link: "github.com/shanerbergman",
    slug: "d3",
    title: "D3 Visualizations with React",
    description: "Fun Visualizations using React and D3",
    image:
      "https://images.unsplash.com/photo-1666535904626-9711b03e2aba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  },
  {
    link: "react-infinite-scroll",
    slug: "mapbox_custom_draw",
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    image:
      "https://images.unsplash.com/photo-1670441182961-0bf8a667821f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];
