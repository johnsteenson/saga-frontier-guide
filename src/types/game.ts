

export interface Character {
  name: string;
  talent: string[];
}

export type ComboLink = "S" | "R" | "SR" | ""
export interface Combo {
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

export type SkillType = "Tech" | "Gun" | "Spell" | "Mech" | "Monster"
export interface Skill {
  name: string;
  remasterName?: string;
  wp?: number;
  desc?: string;
  combo?: Combo;

  sparkFrom?: SparkTo;


}

export interface SkillSet {
  name: string;
  skills: Skill[];
}