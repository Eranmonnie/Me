
interface SocialLinkProps {
    href: string;
    icon: 'mail' | 'github' | 'linkedin' | 'x' | 'resume';
}

function SocialLink({ href, icon }: SocialLinkProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <div className="p-1 md:p-2 rounded-lg border border-zinc-500 dark:hover:bg-zinc-800 hover:bg-zinc-300 transition-colors duration-300">
                {getIcon(icon)}
            </div>
        </a>
    );
}

function getIcon(type: string) {
    switch (type) {
        case 'mail':
            return (
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-base md:text-lg dark:text-zinc-300 text-zinc-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <rect width="416" height="320" x="48" y="96" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="40" ry="40"></rect>
                    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 160l144 112 144-112"></path>
                </svg>
            );
        case 'github':
            return (
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-base md:text-lg dark:text-zinc-300 text-zinc-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                </svg>
            );
        case 'linkedin':
            return (
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-base md:text-lg dark:text-zinc-300 text-zinc-500 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path></svg>
            );
        case 'x':
            return (
                <svg xmlns="http://www.w3.org/2000/svg"height="1em" width="1em" fill="currentColor" className="text-base md:text-lg dark:text-zinc-300 text-zinc-500 " viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
            )

        case 'resume':
            return (
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" className="text-base md:text-lg dark:text-zinc-300 text-zinc-500 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"></path></svg>
            );

        default:
            return null;
    }
}

export default SocialLink;