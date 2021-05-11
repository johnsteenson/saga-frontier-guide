<template>
  <div class="home">
    <div class="p-grid">
      <div class="p-col-6 p-offset-2">
        <p>
          This is the tool that Ring Lord Virgil doesn't want you to know about!
          Select any skill, and see skills that can combo with it. Continue
          onward to make a chain of impressive skills that will bring Virgil to
          his knees.
        </p>
      </div>
    </div>
    <div class="p-grid">
      <div class="p-col-4 p-offset-3">
        <Card>
          <template #title>
            Combo Explorer
          </template>
          <template #content>
            <div class="p-fluid">
              <div class="p-field" v-for="i in [0, 1, 2, 3, 4]" :key="i">
                <SkillSelector
                  :skill="combo[i]"
                  :skills="skills[i]"
                  @onChange="skillChanged($event, i)"
                />
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { skillData } from "@/data";

import { doesCombo } from "@/lib/combo";

import { useStore } from "@/store";
import SkillSelector from "@/components/SkillSelector.vue";
import { Skill } from "@/types/game";

export default defineComponent({
  name: "Combos",
  components: {
    SkillSelector
  },
  setup() {
    const store = useStore();
    const skillSets = store.state.skillSet;

    const combo = ref([
      skillData[0],
      skillData[0],
      skillData[0],
      skillData[0],
      skillData[0]
    ]);
    const skills = ref([
      skillData,
      [skillData[0]],
      [skillData[0]],
      [skillData[0]],
      [skillData[0]]
    ]);

    const skillChanged = (skill: Skill, i: number) => {
      if (i < 4) {
        skills.value[i + 1] = skillData.filter((nextSkill: Skill) => {
          console.log(skill, nextSkill);
          return doesCombo(skill, nextSkill);
        });
      }
    };

    const updateSkills = (payload: any, setIndex: number) => {
      store.commit("setSkill", {
        setIndex,
        skillIndex: payload.index,
        skill: payload.skill
      });
    };

    return {
      skills,
      combo,
      updateSkills,
      skillChanged,
      skillSets
    };
  }
});
</script>
