// relative path. load data, then available in sibling +page.svelte
import { projects } from './data.js';

export function load() {
	return {
		projects: projects.map((project) => ({
			title: project.title,
			content: project.content,
			link: project.link
		}))
	};
}
