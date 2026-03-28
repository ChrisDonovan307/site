import Cite from 'citation-js';
import pubsContent from '$lib/assets/pubs.bib?raw';
import preprintsContent from '$lib/assets/preprints.bib?raw';
import conferencesContent from '$lib/assets/conferences.bib?raw';

function formatBib(content: string): string {
	const cite = new Cite(content);
	return cite.format('bibliography', {
		format: 'html',
		template: 'apa',
		lang: 'en-US'
	});
}

export function load() {
	return {
		pubs: formatBib(pubsContent),
		preprints: formatBib(preprintsContent),
		conferences: formatBib(conferencesContent)
	};
}
