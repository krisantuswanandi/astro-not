<script>
  import { counter, increase } from "../stores/counter";
</script>

<div class="flex flex-col items-center">
  <img
    src="https://cdn.svgporn.com/logos/svelte-icon.svg"
    class="w-32 h-32 m-8"
    alt="Svelte Logo"
  />
  <button
    class="px-4 py-2 rounded-md bg-red-600 shadow-red-300 shadow-lg text-white"
    on:click={increase}
  >
    Count: {$counter}
  </button>
</div>
