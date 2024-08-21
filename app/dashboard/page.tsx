"use client";

import { useState } from "react";
import { SearchSection } from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

type Props = {}

const DashboardPage = (props: Props) => {
    const [userSearchInput, setUserSearchInput] = useState<string>("");
    return (
        <div>
            <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />
            <TemplateListSection userSearchInput={userSearchInput} />
        </div>
    )
}

export default DashboardPage;