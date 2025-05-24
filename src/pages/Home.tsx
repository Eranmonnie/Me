
function Home() {
  return (
    <>
      <div className="flex flex-col gap-7 mt-16 text-zinc-100 font-inter-regular text-md" >
        <div>
          <img src="src/images/nice4.avif" alt="damm"
            className="w-full h-[110px] object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <p className=""><span className="text-[22px]">𝓗𝓲, 𝓲𝓶 𝓕𝓮𝓻𝓪𝓷𝓶𝓲</span></p>
          <p className=" ">I'm a software developer currently working as a full-stack developer in Lagos, Nigeria.</p>
          <p className=" ">i'm currently interested and have experience in fullstack web-development, systems programming, a little bit of low level, sysadmin and basic devops.</p>
          <p className="  leading-8">occasionally(ish) I write. You can check out   <span className="border border-zinc-500 rounded-md px-2 hover:bg-orange-400 hover:text-black transition-colors duration-200">what I've written here</span>.If you want more info on my professional background, the details can be found  <span className="border border-zinc-500 rounded-md px-2 hover:bg-orange-400 hover:text-black transition-colors duration-200">in my portfolio page</span>.</p>

          <p className="">what keeps me up at night?</p>
          <ul className="pl-4 list-disc space-y-2">
            <li className=" ">computers... i just wanna know everything about them</li>
            <li className=" ">engineering endeavors that have the potential to positively transform lives - man’s fate is the heart of tech, right?</li>
            <li className=" ">Exploring the science-faith intersection (Christian upbringing meets scientific mind)</li>
            <li className="  leading-8 ">music and that share music: it's a love language, <span className="border border-zinc-500 rounded-md px-2 hover:bg-orange-400 hover:text-black transition-colors duration-200">here are some playlists i've worked on</span> </li>

          </ul>
          <p
            className=""> shoot me a dm on <span className="border border-zinc-500 rounded-md px-2 hover:bg-orange-400 hover:text-black transition-colors duration-200">Twitter/X </span>or <span className="border border-zinc-500 rounded-md px-2 hover:bg-orange-400 hover:text-black transition-colors duration-200">Github</span> , if you want to chat, vibe, or build something cool together.</p>

          <div className="flex gap-0.5 items-center max-w-full flex-wrap"><img width="88px" height="31px" src="/badges/debian.gif" /><img width="88px" height="31px" src="/badges/vi.gif" /><img width="88px" height="31px" src="/badges/anime.gif" /><img width="88px" height="31px" src="/badges/animegirl.gif" /><img width="88px" height="31px" src="/badges/fingers.gif" /><img width="88px" height="31px" src="/badges/trustme.gif" /><img width="88px" height="31px" src="/badges/firefox.gif" /><img width="88px" height="31px" src="/badges/linux.gif" /><img width="88px" height="31px" src="/badges/linuxnow.gif" /><img width="88px" height="31px" src="/badges/luffy.gif" /><img width="88px" height="31px" src="/badges/gecko.gif" /><img width="88px" height="31px" src="/badges/eyes.gif" /><img width="88px" height="31px" src="/badges/sijis.png" /> </div>


        </div>
      </div>


    </>
  );
}

export default Home;

