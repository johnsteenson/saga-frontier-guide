<template>
  <AutoComplete
    v-model="curSkill"
    :dropdown="true"
    :field="field"
    :suggestions="filteredSkills"
    @complete="searchSkill($event)"
    @item-select="selectSkill($event)"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";

import { Skill } from "@/types/game";
// import skillsJson from "@/data/skills.json";

// const skills = skillsJson as Skill[];

export default defineComponent({
  name: "SkillSelector",

  setup(props, { emit }) {
    const filteredSkills = ref<Skill[]>([]);
    const curSkill = ref<Skill>(props.skill);

    const field = ref("name"); // For option of showing remaster names

    watch(
      () => props.skill,
      value => {
        curSkill.value = value;
      }
    );

    const searchSkill = (event: any) => {
      filteredSkills.value = props.skills.filter((skill: Skill) => {
        return (
          skill.name.toLowerCase().indexOf(event.query.toLowerCase()) !== -1
        );
      });
    };

    const selectSkill = (event: any) => {
      const skill = event.value as Skill;
      curSkill.value = skill;

      emit("onChange", skill);
    };

    return {
      field,
      curSkill,
      filteredSkills,
      searchSkill,
      selectSkill
    };
  },

  props: {
    skill: {
      required: true,
      type: Object as PropType<Skill>
    },
    skills: {
      required: true,
      type: Object as PropType<Skill[]>
    }
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
