<template>
  <AutoComplete
    v-model="curChar"
    :dropdown="true"
    :field="field"
    :suggestions="filteredCharacters"
    @complete="searchCharacter($event)"
    @item-select="selectCharacter($event)"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";

import { Character } from "@/types/game";

export default defineComponent({
  name: "CharacterSelector",

  setup(props, { emit }) {
    const filteredCharacters = ref<Character[]>([]);
    const curChar = ref<Character>(props.character);

    const field = ref("name"); // For option of showing remaster names

    watch(
      () => props.character,
      value => {
        curChar.value = value;
      }
    );

    const searchCharacter = (event: any) => {
      filteredCharacters.value = props.characters.filter(
        (character: Character) => {
          return (
            character.name.toLowerCase().indexOf(event.query.toLowerCase()) !==
            -1
          );
        }
      );
    };

    const selectCharacter = (event: any) => {
      const character = event.value as Character;
      curChar.value = character;

      emit("onChange", character);
    };

    return {
      field,
      curChar,
      filteredCharacters,
      searchCharacter,
      selectCharacter
    };
  },

  props: {
    character: {
      required: true,
      type: Object as PropType<Character>
    },
    characters: {
      required: true,
      type: Object as PropType<Character[]>
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
