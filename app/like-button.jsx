"use client";

import { useState } from "react";

export default function LikeButton() {
    const [clickNum, setClickNum] = useState(0);

    function handleClick() {
        console.log(`Button clicked ${clickNum} times!`);
        setClickNum(clickNum + 1);
    }

    return <button onClick={handleClick}>Like{clickNum ? `: ${clickNum}` : null}</button>
}