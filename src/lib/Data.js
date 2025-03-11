export const navItems = [
  {
    name: "Home",
    href: "#home",
    hasDropdown: false,
  },
  {
    name: "Solutions",
    href: "#solutions",
    hasDropdown: true,
    dropdownItems: [
      { name: "Solution1", href: "#" },
      { name: "Solution2", href: "#" },
      { name: "Solution3", href: "#" },
      { name: "Solution4", href: "#" },
    ],
  },
  {
    name: "About Us",
    href: "#about",
    hasDropdown: false,
  },
  {
    name: "Contact Us",
    href: "#contact",
    hasDropdown: false,
  },
];

export const b_t_animation = {
  hide: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
