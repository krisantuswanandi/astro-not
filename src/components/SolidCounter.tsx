/** @jsxImportSource solid-js */
import { useStore } from "@nanostores/solid";
import { counter, increase } from "../stores/counter";

export default function SolidCounter() {
  const $counter = useStore(counter);

  return (
    <div class="flex flex-col items-center">
      <img
        src="https://cdn.svgporn.com/logos/solidjs-icon.svg"
        class="w-32 h-32 m-8"
        alt="Solid Logo"
      />
      <button
        class="px-4 py-2 rounded-md bg-sky-800 shadow-sky-600 shadow-lg text-white"
        onClick={increase}
      >
        Count: {$counter()}
      </button>
    </div>
  );
}
