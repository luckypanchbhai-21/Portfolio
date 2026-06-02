import { useEffect, useState } from "react";

export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      const current = sections.reduce((active, section) => {
        if (section.offsetTop <= marker) {
          return section;
        }
        return active;
      }, sections[0]);

      if (current?.id) {
        setActiveId(current.id);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [ids]);

  return activeId;
}
