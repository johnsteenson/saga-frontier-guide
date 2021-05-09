<template>
  <div class="home">
    This is the place Ring Lord Virgil doesn't want you to ever know about!

    <div class="p-grid">
      <div class="p-col-2" v-for="(set, index) in skillSets" :key="index">
        <SkillDeck
          :skillSet="set"
          @onSkillChange="updateSkills($event, index)"
        />
      </div>
    </div>

    <Button label="Make My Combos" @click="makeCombo()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SkillDeck from "@/components/SkillDeck.vue";

import { useStore } from "@/store";

export default defineComponent({
  name: "Combos",
  components: {
    SkillDeck
  },
  setup() {
    const store = useStore();
    const skillSets = store.state.skillSet;

    const makeCombo = () => {
      console.log(skillSets);
    };

    const updateSkills = (payload: any, setIndex: number) => {
      store.commit("setSkill", {
        setIndex,
        skillIndex: payload.index,
        skill: payload.skill
      });
    };

    return {
      updateSkills,
      makeCombo,
      skillSets
    };
  }
});
</script>
