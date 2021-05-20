<template>
  <div class="home">
    <p>
      SaGa Frontier is a complex game. There is a vast web of rules which
      determine learning skills. This app is an interactive guide to simplify
      that process to help you navigate the game. You can quickly look up a
      skill and see which skills sparks it, as well as who is most likely to
      learn it. Also, you can explore creating combos. This is still a work in
      progress so be on the look out for new features.
    </p>
    <p>
      The data used in this guide was gathered from this
      <a
        href="https://gamefaqs.gamespot.com/ps/198537-saga-frontier/faqs/58412"
        target="_blank"
        >excellent guide</a
      >
      by Zaraktheus on the mechanics of SaGa Frontier.
    </p>
    <p>
      For a guide to the game as a whole, I highly recommend
      <a href="http://snesmusic.jukor.net/junk/sagafaq.txt" target="_blank"
        >Matt Hobbs' Walkthrough</a
      >.
    </p>
    <p>
      This project is open-source, so feel free to contribute or fork:
      <a href="https://github.com/johnsteenson/saga-frontier-guide"
        >https://github.com/johnsteenson/saga-frontier-guide</a
      >
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {}
});
</script>
