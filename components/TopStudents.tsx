"use client";

import React, { useEffect } from "react";

export default function TopStudents() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(
          ".scroller__inner"
        ) as HTMLElement;
        const scrollerContent = Array.from(scrollerInner.children) as
          | HTMLElement[]
          | null;

        scrollerContent?.forEach((content) => {
          const duplicate = content.cloneNode(true) as HTMLElement;
          duplicate.setAttribute("aria-hidden", true);
          scrollerInner?.appendChild(duplicate);
        });
      });
    }
  }, []);
  return (
    <main className="w-full flex flex-col items-center mt-16 mb-10">
      <h1 className="text-xl font-semibold">Top Students</h1>
      <div className="flex w-full justify-center">
        <div className="scroller ">
          <ul className="tag-list scroller__inner">
            <li>Desmond</li>
            <li>Nini</li>
            <li>Rose</li>
            <li>Vicky</li>
            <li>Nancy</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
