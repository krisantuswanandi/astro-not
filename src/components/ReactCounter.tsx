/** @jsxImportSource react */
import { useStore } from "@nanostores/react";
import { counter, increase } from "../stores/counter";

export default function ReactCounter() {
  const $counter = useStore(counter);

  return (
    <div className="flex flex-col items-center">
      <img
        src="https://cdn.svgporn.com/logos/react.svg"
        className="w-32 h-32 m-8"
        alt="React Logo"
      />
      <button
        className="px-4 py-2 rounded-md bg-cyan-400 shadow-cyan-200 shadow-lg"
        onClick={increase}
      >
        Count: {$counter}
      </button>
    </div>
  );
}
