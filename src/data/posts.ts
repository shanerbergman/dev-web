export type Project = {
  link: string;
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    link: "nextjs.dashboard.shanebergman.com",
    slug: "nextjs.dashboard",
    title: "Generic Dashboard",
    description: "Dashboard built with NextJS and Tailwind CSS",
    image: "nextjs-icon.svg",
  },
  {
    link: "mapboxdraw.shanebergman.com",
    slug: "custom_draw_mapbox",
    title: "Mapbox Custom Draw Tool",
    description: "A custom Draw Tool made in Mapbox",
    image: "custom_draw_mapbox.png",
  },
  {
    link: "d3.shanebergman.com",
    slug: "d3",
    title: "D3 Visualizations with React",
    description: "Fun Visualizations using React and D3",
    image: "fun_with_d3.png",
  },
];
