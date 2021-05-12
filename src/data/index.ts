import skillsJson from "@/data/skills.json";
import charactersJson from "@/data/characters.json";
import { Skill, Character } from "@/types/game";

export const skillData = skillsJson as Skill[];

export const characterData = charactersJson as Character[];