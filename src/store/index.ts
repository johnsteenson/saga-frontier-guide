import { SkillSet, Skill } from '@/types/game';
import { InjectionKey } from '@vue/runtime-core';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

import skillsJson from "@/data/skills.json";

const skills = skillsJson as Skill[];

const BLANK = skills[0];

export interface State {
  skillSet: SkillSet[]
}

export const INJECTION_KEY: InjectionKey<Store<State>> = Symbol();

function getStoredSkillSet(index: number) {
  const data = window.localStorage.getItem(`skillSet.${index}`);
  if (data) {
    return JSON.parse(data);
  }

  return {
    name: `Character ${index + 1}`,
    skills: [BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK]
  }
}

export const store = createStore<State>({
  state: {
    skillSet: [
      getStoredSkillSet(0),
      getStoredSkillSet(1),
      getStoredSkillSet(2),
      getStoredSkillSet(3),
      getStoredSkillSet(4)
    ]
  },
  mutations: {
    setSkill(state: State, payload: any) {
      state.skillSet[payload.setIndex].skills[payload.skillIndex] = payload.skill;
      window.localStorage.setItem(`skillSet.${payload.setIndex}`, JSON.stringify(state.skillSet[payload.setIndex]));
    },

    setSkillSet(state: State, payload: any) {
      state.skillSet[payload.setIndex] = payload.skillSet;
    }
  },
  actions: {
  },
  modules: {
  },
});

export function useStore() {
  return baseUseStore(INJECTION_KEY);
}