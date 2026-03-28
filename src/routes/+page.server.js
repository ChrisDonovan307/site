// relative path. load data, then available in sibling +page.svelte
import { projects, bio, socials, software} from './data.ts';

export function load() {
	return { projects, bio, socials, software };
}
