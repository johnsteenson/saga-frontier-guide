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

import { computed, defineComponent, ref } from "vue";
import SkillSelector from "@/components/SkillSelector.vue";

import TechInfo from "@/components/TechInfo.vue";

import { useRouter, useRoute } from "vue-router";
import { Skill } from "@/types/game";

export default defineComponent({
  name: "Skills",
  setup() {
    const skills = skillData;

    const route = useRoute();
    const router = useRouter();
    const routeSkill = route.params["skillName"];

    const curSkill = ref<Skill>(skillData[0]);

    if (routeSkill) {
      curSkill.value =
        skillData.find((skill: Skill) => skill.name === routeSkill) ||
        skillData[0];
    }

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
