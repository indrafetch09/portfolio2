import { IoGitBranchOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const HeadCmd = () => {
    return (
        <>
            {/* head */}
            <div class=" flex items-center gap-1">
                <span class="font-bold text-lg text-(--text-accent-tosca)">~</span>
                {/* horizontal line */}
                <div class="grow border-t border-(--text-muted)"></div>
                <div className="flex gap-2 text-sm text-(--text-main)">
                    <p>on</p>
                    <div class="flex text-sm gap-1">
                        <IoGitBranchOutline className="accent-red" />
                        <span class="accent-red"> main</span>
                    </div>
                    <p>via</p>
                    <div class="flex text-sm gap-1">
                        <FaGithub className="accent-green" />
                        <a href="https://github.com/indrafetch09" class="accent-green">
                            indrafetch09
                        </a>
                    </div>
                    <p>&copy; Copyright 2026</p>
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