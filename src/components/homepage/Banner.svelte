<script>
  import { onMount, onDestroy } from "svelte";

  let interval;
  let ticker;
  let phrases = [];

  let posX = 0;

  const basePhrases = ["Web Design", "Web Development", "SEO Optimization"];

  onMount(() => {
    const windowWidth = window.innerWidth;
    // triple phrases immediately
    phrases = [...basePhrases, ...basePhrases];

    interval = setInterval(() => {
      if (Math.abs(posX) >= windowWidth * 2) {
        posX = 0;
      }

      posX--;
      ticker.style.transform = `translateX(${posX}px)`;
    }, 25);
  });

  onDestroy(() => {
    clearInterval(interval);

    interval = null;
  });
</script>

<div class="bg-black text-white py-6 overflow-hidden">
  <div class="text-6xl mx-6 uppercase font-black tracking-wider">
    <div bind:this={ticker} class="w-[200%] flex justify-between">
      {#each phrases as phrase}
        <p>{phrase}</p>
        &#9642;
      {/each}
    </div>
  </div>
</div>
