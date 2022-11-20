<template>
  <div>
    <section>
      <div
        class="relative grid w-full bg-indigo-500 h-96 lg:h-[32rem] place-items-center"
      >
        <div class="flex flex-col items-center mx-auto text-center">
          <h1 class="text-4xl font-semibold text-white uppercase md:text-6xl">
            About Component
          </h1>

          <p class="mt-6 text-lg leading-5 text-white">Lorem Ipsum</p>

          <a href="#about" class="mt-8 cursor-pointer animate-bounce">
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="27" cy="26" r="18" stroke="white" stroke-width="2" />
              <path
                d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>

      <svg
        class="fill-indigo-500"
        viewBox="0 0 1440 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z" />
      </svg>
    </section>
  </div>
</template>
<script>
export default {
  name: "AboutComponent",
};
</script>
