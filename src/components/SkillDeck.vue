<template>
  <Card>
    <template #title>
      {{ skillSet.name }}
    </template>

    <template #content>
      <div class="p-fluid">
        <div class="p-field">
          <SkillSelector v-model:skill="skillSet.skills[0]" />
        </div>
        <div class="p-field">
          <SkillSelector v-model:skill="skillSet.skills[1]" />
        </div>
        <div class="p-field">
          <SkillSelector v-model:skill="skillSet.skills[2]" />
        </div>
        <div class="p-field">
          <SkillSelector v-model:skill="skillSet.skills[3]" />
        </div>
        <div class="p-field">
          <SkillSelector v-model:skill="skillSet.skills[4]" />
        </div>
        <div class="p-field">
          <SkillSelector v-model:skill="skillSet.skills[5]" />
        </div>
        <div class="p-field">
          <SkillSelector v-model:skill="skillSet.skills[6]" />
        </div>
        <div class="p-field">
          <SkillSelector v-model:skill="skillSet.skills[7]" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";

import SkillSelector from "./SkillSelector.vue";

import { Skill, SkillSet } from "@/types/game";
import skillsJson from "@/data/skills.json";

const skills = skillsJson as Skill[];

export default defineComponent({
  name: "SkillDeck",

  setup(props) {
    return {};
  },

  props: {
    skillSet: {
      required: true,
      type: Object as PropType<SkillSet>
    }
  },

  components: {
    SkillSelector
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  display: block;
  margin-bottom: 12px;
}
</style>
