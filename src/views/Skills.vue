<template>
  <div class="home">
    <div class="p-grid">
      <div class="p-fluid p-col-8 p-offset-2">
        <SkillSelector
          :skill="curSkill"
          :skills="skills"
          @onChange="onSkillSelected($event)"
        />
      </div>
    </div>
    <TechInfo :skill="curSkill" v-if="curSkillType == 'Tech'" />
  </div>
</template>

<script lang="ts">
import { skillData } from "@/data";

import { computed, defineComponent, ref, watch } from "vue";
import SkillSelector from "@/components/SkillSelector.vue";

import TechInfo from "@/components/skills/TechInfo.vue";

import { useRouter, useRoute } from "vue-router";
import { Skill } from "@/types/game";

function lookupSkill(skillName: string) {
  return (
    skillData.find((skill: Skill) => skill.name === skillName) || skillData[0]
  );
}

export default defineComponent({
  name: "Skills",
  setup() {
    const skills = skillData;

    const route = useRoute();
    const router = useRouter();

    const curSkill = ref<Skill>(
      route.params.skillName
        ? lookupSkill(route.params.skillName as string)
        : skillData[0]
    );

    watch(
      () => route.params.skillName,
      value => {
        curSkill.value = lookupSkill(value as string);
      }
    );

    // if (routeSkill) {
    //   curSkill.value =
    //     skillData.find((skill: Skill) => skill.name === routeSkill) ||
    //     skillData[0];
    // }

    const curSkillType = computed(() => {
      return curSkill.value?.type || "";
    });

    const onSkillSelected = (skill: Skill) => {
      curSkill.value = skill;

      router.push(`/skills/${skill.name}`);
    };

    return {
      onSkillSelected,
      curSkill,
      curSkillType,
      skills
    };
  },
  components: {
    SkillSelector,
    TechInfo
  }
});
</script>
