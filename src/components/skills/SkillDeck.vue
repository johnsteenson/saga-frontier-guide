<template>
  <Card>
    <template #title>
      {{ skillSet.name }}
    </template>

    <template #content>
      <div class="p-fluid">
        <div class="p-field" v-for="(skill, index) in skills" :key="index">
          <SkillSelector
            :skill="skillSet.skills[index]"
            @onChange="skillSelected($event, index)"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, watch } from "vue";

import SkillSelector from "../SkillSelector.vue";

import { Skill, SkillSet } from "@/types/game";
import skillsJson from "@/data/skills.json";

const skills = skillsJson as Skill[];

export default defineComponent({
  name: "SkillDeck",

  setup(props, { emit }) {
    const curSkillSet = ref<SkillSet>(props.skillSet);

    // // curSkillSet.value.console.log("IN", props.skillSet);

    // watch(props.skillSet, value => {
    //   console.log("UPDATE", value);
    //   curSkillSet.value = value;
    // });

    const skillSelected = (skill: any, index: number) => {
      emit("onSkillChange", {
        skill,
        index
      });
    };

    return {
      skillSelected,
      skills: curSkillSet.value.skills
    };
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
