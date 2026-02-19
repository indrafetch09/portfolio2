import { IoGitBranchOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const HeadCmd = () => {
    return (
        <>
            {/* head */}
            <div class="flex items-center gap-4">
                <span class="font-bold text-lg text-(--text-accent-tosca)">~</span>
                {/* horizontal line */}
                <div class="grow border-t border-(--text-muted)"></div>
                <div className="flex gap-2 text-sm font-bold text-(--text-main)">
                    <p className="font-normal">on</p>
                    <div class="flex gap-1 accent-red">
                        <IoGitBranchOutline />
                        <span > main</span>
                    </div>
                    <p className="font-normal">via</p>
                    <div class="flex gap-1 ubderline accent-green">
                        <FaGithub />
                        <a className="underline" href="https://github.com/indrafetch09">
                            indrafetch09
                        </a>
                    </div>
                    <p className="text-(--text-accent-purple)">&copy;-2026-Copyright</p>
                </div>
            </div>
            <div class="flex text-sm gap-2">
                <span class="font-bold text-(--text-accent-green)">@</span>
                <span class="text-(--text-main)">show profile -c</span>
            </div>
        </>
    );
}

export default HeadCmd;