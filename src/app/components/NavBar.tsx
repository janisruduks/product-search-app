import Link from "next/link";

import Icon from "@mdi/react";
import { mdiCircleBoxOutline } from "@mdi/js";

export default function NavBar() {
    return (
        <div className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="p-4">
                <Link href="/" className="inline-flex gap-3">   
                    <Icon path={mdiCircleBoxOutline} size={2} className="text-black dark:text-white" />
                    <span className="text-2xl font-semibold dark:text-white">
                        Product Search App
                    </span>
                </Link>
            </div>
        </div>
    );
}
