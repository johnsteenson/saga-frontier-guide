

export interface Character {
  name: string;
  talent: string[];
}

export type ComboLink = "S" | "R" | "SR" | ""
export interface ComboRules {
  DS: ComboLink;
  DN: ComboLink;
  IS: ComboLink;
  MV: ComboLink;
  HT: ComboLink;
  CL: ComboLink;
  BO: ComboLink;
  SN: ComboLink;
}

export interface SparkTo {
  tech: string;
  chance: number;
}

export type SkillType = "" | "Tech" | "Gun" | "Spell" | "Mech" | "Monster"
export interface Skill {
  name: string;
  type: SkillType;
  remasterName?: string;
  wp?: number;
  desc?: string;
  combo?: ComboRules;

  sparkTo?: SparkTo[];


}

export interface Combo {
  skills: Skill[];
}

export interface ComboList {
  combo3: Combo[],
  combo4: Combo[],
  combo5: Combo[]
}

export interface SkillSet {
  name: string;
  skills: Skill[];
}