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
import skillsJson from "@/data/skills.json";

const skills = skillsJson as Skill[];

export default defineComponent({
  name: "SkillSelector",

  setup(props, { emit }) {
    const filteredSkills = ref<Skill[]>([]);
    const curSkill = ref<Skill>();

    const field = ref("name"); // For option of showing remaster names

    watch(props.skill, value => {
      curSkill.value = value;
    });

    const searchSkill = (event: any) => {
      filteredSkills.value = skills.filter((skill: Skill) => {
        return (
          skill.name.toLowerCase().indexOf(event.query.toLowerCase()) !== -1
        );
      });
    };

    const selectSkill = (event: any) => {
      const skill = event.value as Skill;
      curSkill.value = skill;

      console.log("skill", skill);

      emit("skill.update", skill);
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
