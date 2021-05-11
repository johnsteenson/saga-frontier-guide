import skillsJson from "@/data/skills.json";
import { ComboLink, ComboList, Skill, SkillSet } from "@/types/game";

import * as Immutable from 'immutable';
import PERMUTATIONS from './permutations';

const skills = skillsJson as Skill[];


function isLink(cur: ComboLink, next: ComboLink) {
  if ((cur === 'S' || cur === 'SR') && (next === 'R' || next === 'SR')) {
    return true;
  }
  return false;
}

export function doesCombo(skill: Skill, skillNext: Skill) {
  if (!skill.combo || !skillNext.combo) {
    return false;
  }

  if (isLink(skill.combo.DS, skillNext.combo.DS)) {
    return true;
  }

  if (isLink(skill.combo.DN, skillNext.combo.DN)) {
    return true;
  }

  if (isLink(skill.combo.IS, skillNext.combo.IS)) {
    return true;
  }

  if (isLink(skill.combo.MV, skillNext.combo.MV)) {
    return true;
  }

  if (isLink(skill.combo.HT, skillNext.combo.HT)) {
    return true;
  }

  if (isLink(skill.combo.CL, skillNext.combo.CL)) {
    return true;
  }

  if (isLink(skill.combo.BO, skillNext.combo.BO)) {
    return true;
  }

  if (isLink(skill.combo.SN, skillNext.combo.SN)) {
    return true;
  }

  return false;
}


export function getCombos(skills: Skill[]) {

  // for (const permutation of PERMUTATIONS) {
  //   let combo: Skill[] = [skills[0]];
  //   for (let i = 1; i < 5; i++) {
  //     if(doesCombo(skills[i-1], skills[i])) {
  //       combo.push(skills[i])
  //     } else {
  //       if(combo.length)
  //     }

  //   }
  // }


}


export function searchCombos(skillSets: SkillSet[], selectedSkills: Skill[], curIndex: number, remIndices: number[]) {

}

export function findCombos(skillSets: SkillSet[]) {
  const comboList: ComboList = {
    combo3: [],
    combo4: [],
    combo5: []
  }

  const remIndices = Immutable.Set.of<number>(0, 1, 2, 3, 4);

  searchCombos(skillSets, [], 0, [1, 2, 3, 4])

  // Iterate over character 1
  // For each skill, search through character 2 for a linking skill, then 3, then 4

}

