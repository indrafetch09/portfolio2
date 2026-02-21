import { IoMdGitBranch } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const HeadCmd = () => {
    return (
        <>
            {/* head */}
            <div class="flex items-center gap-4">
                <span class="font-bold text-lg text-accent-tosca">~</span>
                {/* horizontal line */}
                <div class="grow border-t border-main"></div>
                <div className="flex gap-2 text-sm font-bold text-main">
                    <span className="font-normal">on</span>
                    <div class="flex gap-1 text-accent-purple">
                        <IoMdGitBranch />
                        <span >main</span>
                    </div>
                    <span className="font-normal">via</span>
                    <div class="flex gap-1 ubderline text-accent-green">
                        <FaGithub />
                        <a className="underline" href="https://github.com/indrafetch09">
                            indrafetch09
                        </a>
                    </div>
                    <p>&copy; Copyright-2026</p>
                </div>
            </div>
            <div class="flex text-sm gap-2">
                <span class="font-bold text-accent-green">@</span>
                <span class="text-(--text-main)">show profile -c</span>
            </div>
        </>
    );
}

export default HeadCmd;