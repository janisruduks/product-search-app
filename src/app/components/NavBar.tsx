import Link from "next/link";

import Icon from "@mdi/react";
import { mdiCircleBoxOutline } from "@mdi/js";

export default function NavBar() {
    return (
        <div className="bg-white border-gray-200 dark:bg-gray-900 dark:text-white text-black">
            <div className="p-4">
                <Link href="/" className="inline-flex gap-3">   
                    <Icon path={mdiCircleBoxOutline} size={2} />
                    <span className="text-2xl font-semibold ">
                        Product Search App
                    </span>
                </Link>
            </div>
        </div>
    );
}
