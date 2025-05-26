import LinkButton from '@/components/LinkButton';
import SectionHeading from '@/components/SectionHeading';

function Home() {
  return (
    <div className="w-full lg:w-[95%] mt-14 flex flex-col gap-3 md:gap-4 dark:text-zinc-950 text-zinc-100 text-sm lg:text-base p-2.5 md:p-5">
      <section className="mb-4">
        <SectionHeading>
          <span className="underline">Hi, I'm Feranmi</span> 👋
        </SectionHeading>

        <div className="flex flex-col gap-2">
          <p>I'm a software developer currently working as a Back-end developer in Lagos, Nigeria.</p>
          <p>I'm currently interested and have experience in backend development with fullstack capabilities and a bit of systems programming.</p>
          <p>
            When I'm not coding, you'll find me jamming on my guitar or piano, hanging out with my dogs (they're the best!),
            or diving into anime and manga. If you want more info on my professional background, the details can be found
            <LinkButton href="/portfolio" text="in my portfolio page" />
          </p>
        </div>
      </section>


      <section className="mb-4">
        <SectionHeading>What makes me tick 🤔?</SectionHeading>

        <ul className="pl-4 list-disc">
          <li className="mb-1">Understanding how things really work - I'm always digging deeper into the why behind the what</li>
          <li className="mb-1">Building things that matter - I love creating software that solves real problems</li>
          <li className="mb-1">Growth mindset - constantly learning and evolving, both personally and professionally</li>
          <li>Chocolate cake (Give me this and I'm all yours)</li>
        </ul>
      </section>

      <section>
        <p>
          Shoot me a DM on
          <LinkButton href="https://www.linkedin.com/in/ajalaoluwaferanmi/" text="Linkedin" />
          or
          <LinkButton href="https://github.com/Eranmonnie" text="Github" />
          if you want to chat, vibe, or build something cool together.
        </p>
      </section>
    </div>
  );
}

export default Home;