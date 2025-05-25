import Skills from "@/components/skills";

function Portfolio() {
    return (
        <>
             <div className="w-full lg:w-[95%] mt-14 flex gap-3 md:gap-1.5 flex-col items-left h-full md:py-2  text-zinc-100 text-sm lg:text-base p-2.5  md:p-5">
                <div className="flex justify-between items-center w-full ">
                    <div className="w-full md:w-3/5 flex flex-col gap-2 ">
                        <h1 className="text-lg md:text-xl font-bold">Ajala Oluwaferanmi Ayokusibe</h1>
                        <p className="text-xs md:text-sm "> Back-end engineer focused on designing scalable APIs, server-side optimization, and seamless data integration.</p>
                        <p className="font-light text-xs tracking-wide flex gap-1 items-center justify-start">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1025.02 512c0-272.016-213.663-495.104-482.319-511.023-5.536-.608-11.088-1.009-16.72-1.009-1.664 0-3.328.176-4.992.224-2.992-.048-5.968-.224-8.992-.224C229.117-.032-1.026 229.664-1.026 512s230.144 512.032 513.023 512.032c3.024 0 6-.176 9.008-.24 1.664.064 3.328.24 4.992.24 5.632 0 11.184-.4 16.72-1.009 268.64-15.92 482.304-238.976 482.303-511.023zm-95.451 164.832c-17.632-5.12-61.92-16.24-140.064-25.392 6.464-44.192 10-90.896 10-139.44 0-38.256-2.208-75.343-6.288-111.008 99.008-11.824 142.384-26.72 145.296-27.745l-11.92-33.584c22.24 53.088 34.56 111.296 34.56 172.336 0 58.193-11.28 113.761-31.583 164.833zM285.488 512.001c0-35.808 2.37-70.77 6.705-104.401 51.888 4.08 113.936 7.088 186.863 7.792v222.064c-70.992.688-131.664 3.568-182.688 7.473-7.04-42.193-10.88-86.88-10.88-132.928zM542.945 68.223c78.464 22.736 145.648 131.695 175.744 276.111-48.368 3.856-106.624 6.673-175.744 7.33V68.223zm-63.886.783V351.63c-68.368-.688-126.88-3.473-176.063-7.232C333.7 201.79 401.428 93.646 479.059 69.006zm0 632.223l.001 253.743c-72.4-22.976-136.192-118.575-169.36-247.023 47.76-3.504 104.096-6.063 169.359-6.72zm63.888 254.543l-.001-254.56c65.952.623 122.064 3.28 169.217 6.928-32.608 130.128-96 226.416-169.216 247.632zm-.001-318.32l.001-222.032c73.311-.688 134.991-3.776 186.191-8a844.922 844.922 0 0 1 6.496 104.592c0 46.128-3.712 90.864-10.528 133.12-50.416-4.08-110.8-7.008-182.16-7.68zm371.858-323.52c-9.664 3.008-50.063 14.48-131.023 24.032-18.048-95.952-50.672-177.968-93.12-237.168C788.197 143.18 867.797 219.1 914.805 313.932zM358.82 90.589c-52.208 59.952-94.832 146.161-118.096 248.113-72.48-7.856-115.921-17.089-133.312-21.281 50.72-104.64 141.04-186.752 251.408-226.832zM83.637 377.182c12.32 3.344 58.913 14.941 145.553 24.525a795.86 795.86 0 0 0-7.68 110.305c0 48.273 4.368 94.721 12.24 138.688-74.4 8.033-120.16 17.649-140.688 22.609-19.44-50.096-30.208-104.447-30.208-161.312 0-46.96 7.312-92.256 20.783-134.815zm37.457 355.166c23.264-4.944 64.912-12.464 126.592-18.928 24.288 89.712 63.792 165.616 111.136 219.968-101.12-36.72-185.296-108.752-237.728-201.04zM690.662 923.18c38.224-53.264 68.48-125.024 87.296-208.801 63.408 7.28 103.216 15.792 123.296 20.864-48.016 83.072-121.855 149.393-210.592 187.937z">
                                </path>
                            </svg>Lagos, NG.
                        </p>
                        <div className="w-full flex gap-2 flex-wrap py-1 md:py-3">
                            <a href="mailto:ajalaferanmi123@gmail.com" target="_blank">
                                <div className=" p-2 md:p-3 rounded-lg border border-zinc-500 dark:hover:bg-zinc-800 hover:bg-zinc-300 transition-colors duration-300">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-base md:text-lg dark:text-zinc-300 text-zinc-500 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="416" height="320" x="48" y="96" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="40" ry="40">
                                        </rect>
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112">
                                        </path></svg></div></a><a href="https://github.com/Eranmonnie" target="_blank">
                                <div className=" p-2 md:p-3 rounded-lg border border-zinc-500 dark:hover:bg-zinc-800 hover:bg-zinc-300 transition-colors duration-300">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-base md:text-lg dark:text-zinc-300 text-zinc-500 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path></svg></div></a><a href="https://www.linkedin.com/in/oluwasijibomi-ilesanmi-8504b123a/" target="_blank">
                                <div className=" p-2 md:p-3 rounded-lg border border-zinc-500 dark:hover:bg-zinc-800 hover:bg-zinc-300 transition-colors duration-300"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-base md:text-lg dark:text-zinc-300 text-zinc-500 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z">
                                    </path>
                                </svg>
                                </div>
                            </a>
                            <a href="https://x.com/ayokusibe_ajala" target="_blank">
                                <div className=" p-2 md:p-3 rounded-lg border border-zinc-500 dark:hover:bg-zinc-800 hover:bg-zinc-300 transition-colors duration-300"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-base md:text-lg dark:text-zinc-300 text-zinc-500 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path></svg></div></a><a href="https://flowcv.com/resume/qjwdae4u1j" target="_blank"><div className=" p-2 md:p-3 rounded-lg border border-zinc-500 dark:hover:bg-zinc-800 hover:bg-zinc-300 transition-colors duration-300">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" className="text-base md:text-lg dark:text-zinc-300 text-zinc-500 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z">
                                    </path>
                                    </svg>
                                </div>
                            </a>
                        </div>

                    </div>
                    <div className="w-1/5 hidden md:block rounded-lg bg-cover bg-center bg-no-repeat h-36 p-2 bg-red-800"></div>

                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg md:text-xl font-bold">About Me </h2>
                    <p className="text-xs md:text-base tracking-wide text-zinc-100">As a Back-end Engineer, I'm passionate about building systems that make a real impact. I love solving complex problems and turning ideas into working and pratical solutions.</p>
                </div>

                <img className="w-full my-5" src="https://ghchart.rshah.org/Eranmonnie" alt="Eranmonnie's Github chart"></img>
                <div className="w-full my-4"><p className="font-extrabold -tracking-wide text-lg">Work Experience</p><div className="my-4 md:my-3"><div className="flex items-center justify-between"><div className="flex-col-reverse justify-start flex items-start md:flex-row md:items-center gap-2 md:gap-3 my-2 md:my-1 "><p className="font-semibold text-sm  md:text-base tracking-[0.010em] text-clip ">Nject</p><div className="text-xs bg-zinc-900 dark:bg-zinc-200 text-zinc-100 dark:text-black rounded-md py-0.5 px-1 md:px-3 font-semibold tracking-wide">Remote</div></div><p className="text-xs md:text-sm tracking-wide">September 2024 - Present</p></div><p className="text-xs md:text-base font-light tracking-wide dark:text-zinc-300 text-zinc-900">Developed engaging and accessible frontend features using Next.js, enhancing user experience and platform usability. Played a key role in migrating the backend from Python to Golang, leading to a 5x increase in speed and performance. Optimized system scalability and response times, ensuring high reliability and seamless support for a growing user base.</p></div></div>

                <div className="w-full"><p className="font-extrabold -tracking-wide text-lg">Education</p><div className="my-3"><div className="flex items-center justify-between"><p className="font-semibold tracking-[0.010em] ">Babcock Unversity</p><p className="text-xs md:text-sm tracking-wide">Sept, 2020 - June, 2024</p></div><p className="text-xs md:text-sm font-light tracking-wide text-zinc-900 dark:text-zinc-300">B.Sc Software Engineering</p></div></div>
                <div className="w-full">
                    <p className="font-extrabold -tracking-wide text-lg">Skills</p>
                    <Skills/>
                </div>
                <div className="w-full"><p className="font-extrabold -tracking-wide text-lg mb-6">Current Projects</p><div className="flex flex-col gap-2"><a href="https://github.com/sijirama/soro" target="_blank" rel="noopener noreferrer"><div className="p-3.5 hover:bg-zinc-200 dark:hover:bg-zinc-950 transition-colors duration-200 border border-zinc-400 dark:border-zinc-800 rounded-xl flex flex-col gap-4"><div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2"><div className="space-y-1"><p className="text-sm md:text-base font-bold tracking-[0.010em]">Soro</p><p className="text-xs md:text-sm tracking-wide text-zinc-900 dark:text-zinc-100">i'm currently on freedays doing research to build a programming language or rather the interpreter for my language, called soro, the challenge here is that i want to use boken english (pidgin) for the keywords, i just finished the virtual machine and have been adding parts during my free time, check it out</p></div><p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 italic sm:text-right">Research</p></div><div className="flex gap-2 flex-wrap py-1"><div className="text-xs bg-zinc-950 text-zinc-200 dark:bg-zinc-200 dark:text-black rounded-md py-0.5 px-2 md:px-3 font-semibold tracking-wide">Zig</div></div></div></a></div></div>
            </div>


        </>
    );
}

export default Portfolio;

