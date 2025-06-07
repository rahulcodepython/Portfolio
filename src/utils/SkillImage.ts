export const SkillsImage = (skill: string): string => {
	const skillID = skill.toLowerCase();
	return `/tech-icon/${skillID}.svg`;
	// switch (skillID) {
	// 	case 'html':
	// 		return html;
	// 	case 'docker':
	// 		return docker;
	// 	case 'css':
	// 		return css;
	// 	case 'javascript':
	// 		return javascript;
	// 	case 'nextjs':
	// 		return nextJS;
	// 	case 'reactjs':
	// 		return react;
	// 	case 'typescript':
	// 		return typescript;
	// 	case 'bootstrap':
	// 		return bootstrap;
	// 	case 'mongodb':
	// 		return mongoDB;
	// 	case 'mysql':
	// 		return mysql;
	// 	case 'postgresql':
	// 		return postgresql;
	// 	case 'tailwind':
	// 		return tailwind;
	// 	case 'vitejs':
	// 		return vitejs;
	// 	case 'c':
	// 		return c;
	// 	case 'cplusplus':
	// 		return cplusplus;
	// 	case 'java':
	// 		return java;
	// 	case 'php':
	// 		return php;
	// 	case 'python':
	// 		return python;
	// 	case 'django':
	// 		return django;
	// 	case 'firebase':
	// 		return firebase;
	// 	case 'git':
	// 		return git;
	// 	case 'nginx':
	// 		return nginx;
	// 	case 'numpy':
	// 		return numpy;
	// 	case 'selenium':
	// 		return selenium;
	// 	case 'tensorflow':
	// 		return tensorflow;
	// 	case 'wordpress':
	// 		return wordpress;
	// 	case 'figma':
	// 		return figma;
	// 	case 'microsoftoffice':
	// 		return microsoftoffice;
	// 	case 'canva':
	// 		return canva;
	// 	case 'ubuntu':
	// 		return ubuntu;
	// 	case 'nodejs':
	// 		return nodejs;
	// 	case 'flutter':
	// 		return flutter;
	// 	case 'expressjs':
	// 		return express;
	// 	case 'socket':
	// 		return socket;
	// 	case 'expo':
	// 		return expo;
	// 	default:
	// 		return '';
	// }
}
