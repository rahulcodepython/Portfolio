export const SkillsImage = (skill: string): string => {
	const skillID = skill.toLowerCase();
	return `/tech-icon/${skillID}.svg`;
}
