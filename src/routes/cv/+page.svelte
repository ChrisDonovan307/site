<script lang="ts">
  import type { PageData } from './$types';
  import { Button } from '$lib/components/ui/button/index.js';
  import { software } from '../data.ts';

  let { data }: { data: PageData } = $props();
</script>

<div class="flex-1">
  <div class="flex justify-center">
    <a href="cv.pdf" download="christopher_donovan_cv.pdf">
      <Button class="btn">
        <i class="fa fa-download"></i>
        Download CV
      </Button>
    </a>
  </div>

  <h2>Research Statement</h2>

  <p>
    I'm a food systems data scientist with an interdisciplinary background in environmental science,
    economics, and behavior. My strengths include quantitative analysis and modeling, with a
    particular emphasis on open data and reproducible workflows. I contribute to the advancement of
    scientific rigor and accessibility by developing and applying methods that enable data to be
    shared, validated, and used across disciplines. Through this work, I help generate insights that
    support more sustainable, transparent, and equitable social-ecological systems.
  </p>

  <h2>Education</h2>

  <div>
    <div class="job">
      <strong>M.S., Community Development and Applied Economics</strong>
      <p class="date">2024</p>
      <p>
        Department of Community Development and Applied Economics<br />
        University of Vermont<br />
        Burlington, Vermont
      </p>
    </div>

    <div class="job">
      <strong>Graduate Certificate, Ecological Economics</strong>
      <p class="date">2024</p>
      <p>
        Department of Community Development and Applied Economics<br />
        University of Vermont<br />
        Burlington, Vermont
      </p>
    </div>

    <div class="job">
      <strong>B.S., Environmental Studies, Emphasis in Conservation Biology</strong>
      <p class="date">2019</p>
      <p>
        Prescott College<br />
        Prescott, Arizona
      </p>
    </div>
  </div>

  <h2>Work History</h2>

  <div class="space-y-4">
    <div class="job">
      <strong>Food Systems Data Scientist</strong>
      <p class="date">September 2024 - Present</p>
      <p>
        Food Systems Research Institute<br />
        University of Vermont<br />
        Burlington, Vermont
      </p>
    </div>

    <div class="job">
      <strong>Graduate Research Assistant</strong>
      <p class="date">September 2022 - September 2024</p>
      <p>
        Community Development and Applied Economics<br />
        University of Vermont<br />
        Burlington, Vermont
      </p>
    </div>

    <div class="job">
      <strong>Rare Plant Survey Crew Leader</strong>
      <p class="date">April 2022 - August 2022</p>
      <p>
        Institute for Applied Ecology<br />
        Boise, Idaho
      </p>
    </div>

    <div class="job">
      <strong>Precision Restoration Technician</strong>
      <p class="date">April 2020 - April 2022</p>
      <p>
        The Nature Conservancy<br />
        Lander, Wyoming
      </p>
    </div>

    <div class="job">
      <strong>Environmental Services Intern</strong>
      <p class="date">November 2019 - March 2020</p>
      <p>
        Ocotillo Wells SVRA<br />
        Ocotillo Wells, California
      </p>
    </div>

    <div class="job">
      <strong>Seed Technician</strong>
      <p class="date">August 2019 - November 2019</p>
      <p>
        Institute for Applied Ecology<br />
        Silver City, New Mexico
      </p>
    </div>

    <div class="job">
      <strong>Botanical Field Technician</strong>
      <p class="date">May 2019 - August 2019</p>
      <p>
        Great Basin Institute<br />
        Las Vegas, Nevada
      </p>
    </div>
  </div>

  <h2>Publications</h2>

  <h3>Peer-Reviewed</h3>
  {@html data.pubs}

  <h3>Preprint</h3>
  {@html data.preprints}

  <h2>Conferences</h2>
  {@html data.conferences}

  <h2>Software</h2>
  <ul>
    {#each software as { link, title }}
      <li><a href={link}>{title}</a></li>
    {/each}
  </ul>
</div>

<style>
  h2 {
    font-size: 2rem;
    margin: 0.5rem 0 1rem 0;
    border-bottom: 1px solid #575757;
  }
  h3 {
    font-size: 1.4rem;
  }
  :global(.csl-entry) {
    margin-bottom: 1rem;
  }
  :global([data-slot='button']) {
    transition: box-shadow 0.3s ease-in-out;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
  }
  :global([data-slot='button']:hover) {
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
  .job {
    margin-bottom: 1rem;
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 60% 40%;
      column-gap: 2rem;
    }
  }
  .date {
    font-style: italic;
    margin-bottom: 0rem;
    @media (min-width: 768px) {
      grid-column: 2;
      grid-row: 1 / span 2;
      font-style: normal;
    }
  }
</style>
