import type { Route } from "./+types/home.js";
import { Welcome } from "../welcome/welcome.js";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export const loader = ({ context }: Route.LoaderArgs) => {
  console.log(context);
  //           ^?
  return null;
};

export default function Home() {
  return <Welcome />;
}
