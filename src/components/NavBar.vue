<template>
  <nav class="h-20 p-10 flex items-center justify-between bg-[#4d6f9d;]">
    <a href="index.html" class="w-1/3 max-w-[300px]">
      <img class="w-full" src="#" alt="Ingenieria Ansi Logo" />
    </a>
    <input type="checkbox" name="" id="menu" class="peer hidden" />
    <label
      for="menu"
      class="w-auto h-auto cursor-pointer transition-all z-50 md:hidden peer-checked:hidden"
    >
      <!-- <MenuIcon class="stroke-3 w-12 h-10 fill-amber-100" /> -->
    </label>
    <div
      class="fixed inset-0 bg-gradient-to-b from-[#033074]/70 to-blue-200/70 translate-x-full z-40 peer-checked:translate-x-0 transition-transform duration-[0.6s] ease-[cubic-bezier(0.83, 0, 0.17, 1)] md:static md:translate-x-0 md:bg-none"
    >
      <!--The menu isnt static when the peer is checked-->
      <ul
        class="absolute inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md h-max grid gap-6 font-bold text-blue-950 shadow-2xl md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static"
      >
        <p class="text-center text-5xl">En Construccion</p>
      </ul>
    </div>
  </nav>
</template>
<script setup></script>
<style scoped></style>
  