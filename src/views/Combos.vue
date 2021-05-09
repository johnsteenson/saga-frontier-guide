<template>
  <div class="home">
    This is the place Ring Lord Virgil doesn't want you to ever know about!

    <div class="p-grid">
      <div class="p-col-2">
        <SkillDeck v-model:skillSet="skillSets[0]" />
      </div>
      <div class="p-col-2">
        <SkillDeck v-model:skillSet="skillSets[1]" />
      </div>
      <div class="p-col-2">
        <SkillDeck v-model:skillSet="skillSets[2]" />
      </div>
      <div class="p-col-2">
        <SkillDeck v-model:skillSet="skillSets[3]" />
      </div>
      <div class="p-col-2">
        <SkillDeck v-model:skillSet="skillSets[4]" />
      </div>
    </div>

    <Button label="Make My Combos" @click="makeCombo()" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import SkillDeck from "@/components/SkillDeck.vue";
import { SkillSet } from "@/types/game";

export default defineComponent({
  name: "Combos",
  components: {
    SkillDeck
  },
  setup() {
    const skillSets = reactive<SkillSet[]>([
      {
        name: "Character 1",
        skills: []
      },
      {
        name: "Character 2",
        skills: []
      },
      {
        name: "Character 3",
        skills: []
      },
      {
        name: "Character 4",
        skills: []
      },
      {
        name: "Character 5",
        skills: []
      }
    ]);

    const makeCombo = () => {
      console.log(skillSets);
    };

    return {
      makeCombo,
      skillSets
    };
  }
});
</script>
