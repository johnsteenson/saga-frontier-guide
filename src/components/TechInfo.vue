<template>
  <div class="p-grid">
    <div class="p-col-2 p-offset-1">
      <Card>
        <template #title>
          Learned From
        </template>

        <template #content>
          <DataTable :value="sparkFrom" responsiveLayout="scroll">
            <Column field="tech" header="Skill"></Column>
            <Column field="chance" header="Chance"></Column>
          </DataTable>
        </template>
      </Card>
    </div>

    <div class="p-col-2 p-offset-1">
      <Card>
        <template #title>
          Sparks To
        </template>

        <template #content>
          <DataTable :value="sparkTo" responsiveLayout="scroll">
            <Column field="tech" header="Skill"></Column>
            <Column field="chance" header="Chance"></Column>
          </DataTable>
        </template>
      </Card>
    </div>

    <div class="p-col-2 p-offset-1">
      <Card>
        <template #title>
          Natural Talent
        </template>

        <template #content>
          <DataTable :value="charactersWithTalent" responsiveLayout="scroll">
            <Column field="name" header="Name"></Column>
          </DataTable>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, watch, computed } from "vue";

import { skillData, characterData } from "@/data";
import { Character, Skill, SparkTo } from "@/types/game";

export default defineComponent({
  name: "TechInfo",

  setup(props, { emit }) {
    const skill = ref<Skill>(props.skill);

    watch(
      () => props.skill,
      value => {
        skill.value = value;
      }
    );

    const sparkTo = computed(() => {
      return skill.value.sparkTo;
    });

    const sparkFrom = computed(() => {
      return skillData.reduce((sparkTo: SparkTo[], checkSkill: Skill) => {
        const sparkEntry = checkSkill.sparkTo?.find(
          (val: SparkTo) => val.tech === skill.value.name
        );

        if (sparkEntry) {
          sparkTo.push({ tech: checkSkill.name, chance: sparkEntry.chance });
        }

        return sparkTo;
      }, []);
    });

    const charactersWithTalent = computed(() => {
      return characterData.filter((char: Character) => {
        return (
          char.sparkTalent.findIndex(
            (talent: string) => talent === skill.value.name
          ) !== -1
        );
      });
    });

    return {
      sparkTo,
      sparkFrom,
      charactersWithTalent
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
