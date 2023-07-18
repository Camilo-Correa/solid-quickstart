import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Proyecto IS2 UPTC</Title>
      <h1>Proyecto IS2 UPTC</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        Cristian Camilo Correa Fuentes
      </p>
    </main>
  );
}
