<template>
  <nav class="wrapper h-20 flex items-center justify-between">
    <a href="index.html" class="w-1/3 max-w-[200px]">
      <img class="w-full" src="./assets/postersIncLogo.png" alt="postersIncLogo" />
    </a>
    <input type="checkbox" name="" id="menu" class="peer hidden" />
    <label
      for="menu"
      class="bg-[url('../src/assets/img/menu-hamburguesa.svg')] w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-[url('../src/assets/img/cruz.svg')] transition-all z-50 md:hidden"
    ></label>
    <div
      class="fixed inset-0 bg-gradient-to-b from-sky-400/70 to-blue-800/70 translate-x-full z-40 peer-checked:translate-x-0 transition-transform duration-[0.6s] ease-[cubic-bezier(0.83, 0, 0.17, 1)] md:static md:translate-x-0 md:bg-none"
    >
      <!--The menu isnt static when the peer is checked-->
      <ul
        class="absolute inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md h-max grid gap-6 font-bold text-blue-950 shadow-2xl md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static"
      >
        <li><a href="" class="a-hover">Pricing</a></li>
        <li><a href="./products.html" class="a-hover">Product</a></li>
        <li><a href="" class="a-hover">About Us</a></li>
        <li><a href="" class="a-hover">Carrers</a></li>
        <li><a href="" class="a-hover">Community</a></li>
      </ul>
    </div>
    <a href="Tu Posters Aqui" class="button py-3 hidden lg:block">CTA</a>
  </nav>
</template>
<script setup></script>
<style scoped></style>
