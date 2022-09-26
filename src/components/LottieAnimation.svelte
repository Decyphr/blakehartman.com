<script>
  import lottie from "lottie-web";
  import { onMount } from "svelte";

  export let src = "animations/web-dev-lottie.json";
  export let loop = true;

  let element;

  onMount(() => {
    lottie.loadAnimation({
      container: element,
      renderer: "svg",
      loop: loop,
      autoplay: true,
      path: src, // the path to the animation json
    });
  });
</script>

<div bind:this={element} />
