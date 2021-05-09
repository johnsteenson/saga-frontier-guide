<template>
  <div class="home">
    <SkillSelector />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillSelector from "@/components/SkillSelector.vue";

export default defineComponent({
  name: "Techs",
  components: {
    SkillSelector
  }
});
</script>
