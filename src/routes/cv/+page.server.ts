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

function formatAuthorName(author: { given: string; family: string }): string {
  const initials = author.given
    .split(' ')
    .map((n: string) => n[0] + '.')
    .join(' ');
  return `${author.family}, ${initials}`;
}

function formatConferences(content: string): string {
  const cite = new Cite(content);
  const entries = cite.get() as Array<{
    author: { given: string; family: string }[];
    issued: { 'date-parts': number[][] };
    title: string;
    note: string;
    'publisher-place'?: string;
  }>;

  return entries
    .sort((a, b) => b.issued['date-parts'][0][0] - a.issued['date-parts'][0][0])
    .map((entry) => {
      const authors = entry.author.map(formatAuthorName).join(', ');
      const year = entry.issued['date-parts'][0][0];
      const title = entry.title;
      const location = entry['publisher-place'] ?? '';

      // note format: "[Conference presentation]. Conference Name, year, City, ST, Country."
      const conferenceName = entry.note
        .replace(/^\[Conference presentation\]\.\s*/, '')
        .replace(/,\s*\d{4}.*$/, '');

      return `<div class="csl-entry">${authors} (${year}). <em>${title}</em> [Conference presentation]. ${conferenceName}, ${location}.</div>`;
    })
    .join('\n');
}

export function load() {
  return {
    pubs: formatBib(pubsContent),
    preprints: formatBib(preprintsContent),
    conferences: formatConferences(conferencesContent)
  };
}
