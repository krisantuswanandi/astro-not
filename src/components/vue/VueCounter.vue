<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { counter, increase } from '../../stores/counter';

const $counter = useStore(counter);
</script>

<template>
  <div class="flex flex-col items-center">
    <img
      src="https://cdn.svgporn.com/logos/vue.svg"
      class="w-32 h-32 m-8"
      alt="Vue Logo"
    />
    <button
      class="px-4 py-2 rounded-md bg-emerald-500 shadow-emerald-200 shadow-lg"
      @click="increase"
    >
      Count: {{ $counter }}
    </button>
  </div>
</template>
