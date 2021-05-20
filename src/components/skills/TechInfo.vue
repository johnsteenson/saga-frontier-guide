<template>
  <div class="p-grid">
    <div class="p-col-2 p-offset-1">
      <Card>
        <template #title>
          Learned From
        </template>

        <template #content>
          <DataTable
            :value="sparkFrom"
            selectionMode="single"
            @rowSelect="onSkillSelect"
            responsiveLayout="scroll"
          >
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
          <DataTable
            :value="sparkTo"
            selectionMode="single"
            @rowSelect="onSkillSelect"
            responsiveLayout="scroll"
          >
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
          <DataTable
            :value="charactersWithTalent"
            selectionMode="single"
            @rowSelect="onCharacterSelect"
            responsiveLayout="scroll"
          >
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
import { useRouter } from "vue-router";

export default defineComponent({
  name: "TechInfo",

  setup(props, { emit }) {
    const skill = ref<Skill>(props.skill);
    const router = useRouter();

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

    const onSkillSelect = (event: any) => {
      router.push({ path: `/skills/${event.data.tech}` });
    };

    const onCharacterSelect = (event: any) => {
      router.push({ path: `/characters/${event.data.name}` });
    };

    return {
      sparkTo,
      sparkFrom,
      charactersWithTalent,
      onCharacterSelect,
      onSkillSelect
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
