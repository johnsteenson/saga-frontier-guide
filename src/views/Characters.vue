<template>
  <div class="home">
    <div class="p-grid">
      <div class="p-fluid p-col-8 p-offset-2">
        <CharSelector
          :character="curChar"
          :characters="characterData"
          @onChange="onCharSelected($event)"
        />
      </div>
    </div>
    <HumanInfo :character="curChar" v-if="curCharType === 'Human'" />
  </div>
</template>

<script lang="ts">
import { characterData } from "@/data";

import { computed, defineComponent, ref, watch } from "vue";
import CharSelector from "@/components/CharacterSelector.vue";

import HumanInfo from "@/components/characters/HumanInfo.vue";

import { useRouter, useRoute } from "vue-router";
import { Character } from "@/types/game";

function lookupCharacter(charName: string) {
  console.log(characterData.length, charName);
  console.log(characterData.find((char: Character) => char.name === charName));
  return (
    characterData.find((char: Character) => char.name === charName) ||
    characterData[0]
  );
}

export default defineComponent({
  name: "Characters",
  setup() {
    const route = useRoute();
    const router = useRouter();

    const curChar = ref<Character>(
      route.params.charName
        ? lookupCharacter(route.params.charName as string)
        : characterData[0]
    );

    watch(
      () => route.params.charName,
      value => {
        curChar.value = lookupCharacter(value as string);
      }
    );

    const curCharType = computed(() => {
      return curChar.value?.type || "";
    });

    const onCharSelected = (char: Character) => {
      curChar.value = char;

      router.push(`/characters/${char.name}`);
    };

    return {
      characterData,
      onCharSelected,
      curChar,
      curCharType
    };
  },
  components: {
    CharSelector,
    HumanInfo
  }
});
</script>
