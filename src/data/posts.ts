export type Project = {
  link: string;
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    link: "d3.shanebergman.com",
    slug: "d3",
    title: "D3 Visualizations with React",
    description: "Fun Visualizations using React and D3",
    image: "fun_with_d3.png",
  },
  {
    link: "mapboxdraw.shanebergman.com",
    slug: "custom_draw_mapbox",
    title: "Mapbox Custom Draw Tool",
    description: "A custom Draw Tool made in Mapbox",
    image: "custom_draw_mapbox.png",
  },
];
