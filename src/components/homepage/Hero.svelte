<script>
  import Banner from "@src/components/homepage/Banner.svelte";
  import LottieAnimation from "@src/components/LottieAnimation.svelte";
</script>

<section class="h-screen flex flex-col items-stretch" aria-label="Hero">
  <div class="border-b-4 border-black">
    <h1 class="mx-6 my-2 leading-none text-[10rem] text-black font-black">
      Blake Hartman.
    </h1>
  </div>
  <div class="w-full grid grid-cols-2">
    <div class="flex justify-center items-center p-12 bg-black text-white">
      <div class="w-3/4">
        <h2 class="font-bold -tracking-normal text-6xl mb-6">
          I build simple, engaging websites.
        </h2>
        <p class="text-xl font-light mb-12">
          We should talk about growing your business online.
        </p>
        <a
          href="#contact"
          class="py-4 px-8 border-2 border-yellow-200 transition text-xl hover:bg-yellow-200 hover:text-black"
          style="">Let&apos;s get started</a
        >
      </div>
    </div>
    <div class="p-12 bg-yellow-200">
      <div class="max-w-xl mx-auto">
        <LottieAnimation />
      </div>
    </div>
  </div>
  <Banner />
</section>
