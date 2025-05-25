
function Home() {
  return (
    <>
     <div className="w-full lg:w-[95%] mt-14 flex gap-3 md:gap-1.5 flex-col items-left h-full md:py-2  text-zinc-100 text-sm lg:text-base ">

      <div className="w-full h-20 lg:h-28 bg-black rounded-md overflow-hidden mb-1 lg:mb-4"><img src="src/images/nice4.avif" className="w-full h-full"/></div>

        <p className="font-bold text-lg tracking-tight "><span className="underline">  Hi,im Feranmi</span> 👋</p>
          <p>i'm a software developer currently working as a Back-end developer in Lagos, Nigeria.</p>
          <p>i'm currently interested and have experience in backend development with fullstack capabilities and a bit of systems programming.</p>
          <p>When I'm not coding, you'll find me jamming on my guitar or piano, hanging out with my dogs (they're the best!), or diving into anime and manga. If you want more info on my professional background, the details can be found  <a href="/portfolio"><span className="border border-zinc-500 rounded-md px-2 hover:bg-orange-400 hover:text-black transition-colors duration-200">in my portfolio page</span> </a>.</p>

          <p className=" font-bold">What makes me tick 🤔?</p>
          <ul className="pl-4 list-disc ">
            <li>Understanding how things really work - I'm always digging deeper into the why behind the what</li>
            <li>Building things that matter - I love creating software that solves real problems</li>
            <li>Growth mindset - constantly learning and evolving, both personally and professionally</li>
            <li>chocolate cake (Give me this and i'm all yours) </li>
          </ul>
          <p
            className=""> shoot me a dm on <a href="https://x.com/ayokusibe_ajala">
              <span className="border border-zinc-500 rounded-md px-2 hover:bg-orange-400 hover:text-black transition-colors duration-200">Twitter/X
              </span>
            </a> or <a href="https://github.com/Eranmonnie">
              <span className="border border-zinc-500 rounded-md px-2 hover:bg-orange-400 hover:text-black transition-colors duration-200">
                Github
              </span>
            </a>
            , if you want to chat, vibe, or build something cool together.
          </p>




        </div>
    


    </>
  );
}

export default Home;

