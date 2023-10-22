
// import { BsGithub as GithubIcon } from 'react-icons/bs';

// import SectionHeading from '@/common/components/elements/SectionHeading';
// import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { GITHUB_ACCOUNTS } from '@constants/constants';

import Calendar from './Calendar';
import Overview from './Overview';

type ContributionsProps = {
  githubData: any;
};

export default function Contributions({ githubData }: ContributionsProps) {
  return (
    <section className="flex flex-col gap-y-2">
      {/* <div title="Contributions" icon={<GithubIcon className="mr-1" />} /> */}
      <div>
        <p className="dark:text-neutral-400">My contributions from last year on github.</p>
        <a
          href={`https://github.com/${GITHUB_ACCOUNTS.username}`}
          target="_blank"
          className="text-sm font-code text-neutral-600 dark:text-neutral-400 hover:text-neutral-700 hover:dark:text-neutral-400"
        >
          @{GITHUB_ACCOUNTS.username}
        </a>
      </div>

      {!githubData && <div className="dark:text-neutral-400">No Data</div>}

      {githubData && (
        <div className="space-y-3">
          <Overview data={githubData} />
          <Calendar data={githubData} />
        </div>
      )}
    </section>
  );
}
