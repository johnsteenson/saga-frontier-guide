<template>
  <div class="p-grid">
    <div class="p-col-2 p-offset-1">
      <Card>
        <template #title>
          Natural Talent
        </template>

        <template #content>
          <DataTable
            :value="sparkTalent"
            selectionMode="single"
            @rowSelect="onSkillSelect"
            responsiveLayout="scroll"
          >
            <Column field="tech" header="Skill"></Column>
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
    const character = ref<Character>(props.character);
    const router = useRouter();

    watch(
      () => props.character,
      value => {
        character.value = value;
      }
    );

    const sparkTalent = computed(() => {
      return character.value.sparkTalent.map((skill: string) => {
        return {
          tech: skill
        };
      });
    });

    const onSkillSelect = (event: any) => {
      console.log(event);
      router.push({ path: `/skills/${event.data.tech}` });
    };

    return {
      sparkTalent,
      onSkillSelect
    };
  },

  props: {
    character: {
      required: true,
      type: Object as PropType<Character>
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
