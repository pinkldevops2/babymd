import { useState, useRef, useEffect } from "react";

interface CategoryOption {
  label: string;
  value: string; // slug
}

interface DropDownProps {
  onChange: (categorySlug: string) => void;
  category: string; // current selected category slug
}

const categories: CategoryOption[] = [
  { label: "All Categories", value: "" },
  { label: "General", value: "general" },
  { label: "Case Study", value: "case-study" },
  { label: "Blog", value: "blog" }
];

const DropDown = ({ onChange }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All Categories");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-2"
        type="button"
      >
        {/* SVG icon */}
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.75 9.99949H7.06108M2.58222 9.99949H0.75M2.58222 9.99949C2.58222 9.40733 2.8181 8.83943 3.23798 8.42072C3.65786 8.002 4.22734 7.76677 4.82114 7.76677C5.41493 7.76677 5.98441 8.002 6.40429 8.42072C6.82417 8.83943 7.06005 9.40733 7.06005 9.99949C7.06005 10.5916 6.82417 11.1595 6.40429 11.5783C5.98441 11.997 5.41493 12.2322 4.82114 12.2322C4.22734 12.2322 3.65786 11.997 3.23798 11.5783C2.8181 11.1595 2.58222 10.5916 2.58222 9.99949ZM19.75 16.7663H13.8466M13.8466 16.7663C13.8466 17.3585 13.6102 17.9271 13.1902 18.3459C12.7702 18.7647 12.2006 19 11.6067 19C11.0129 19 10.4434 18.7637 10.0235 18.345C9.60367 17.9263 9.36778 17.3584 9.36778 16.7663M13.8466 16.7663C13.8466 16.174 13.6102 15.6065 13.1902 15.1876C12.7702 14.7688 12.2006 14.5335 11.6067 14.5335C11.0129 14.5335 10.4434 14.7688 10.0235 15.1875C9.60367 15.6062 9.36778 16.1741 9.36778 16.7663M9.36778 16.7663H0.75M19.75 3.23272H16.5611M12.0822 3.23272H0.75M12.0822 3.23272C12.0822 2.64056 12.3181 2.07266 12.738 1.65395C13.1579 1.23523 13.7273 1 14.3211 1C14.6152 1 14.9063 1.05775 15.1779 1.16996C15.4496 1.28216 15.6964 1.44662 15.9043 1.65395C16.1122 1.86127 16.2771 2.10741 16.3896 2.37829C16.5021 2.64918 16.5601 2.93951 16.5601 3.23272C16.5601 3.52592 16.5021 3.81626 16.3896 4.08714C16.2771 4.35803 16.1122 4.60416 15.9043 4.81149C15.6964 5.01881 15.4496 5.18327 15.1779 5.29548C14.9063 5.40768 14.6152 5.46543 14.3211 5.46543C13.7273 5.46543 13.1579 5.2302 12.738 4.81149C12.3181 4.39277 12.0822 3.82487 12.0822 3.23272Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdownInformation"
          className="absolute z-10 mt-2 w-44 bg-white right-0 divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div className="font-bold">Select Category</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {categories.map((cat) => (
              <li key={cat.value}>
                <a
                  href="#"
                  onClick={() => {
                    onChange(cat.value);
                    setSelected(cat.label);
                    setIsOpen(false);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {cat.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
