// export const navLinks = [
//   { title: "Home", href: "/" },
//   {
//     title: "Solutions",
//     submenu: [
//       { title: "Solution 1", href: "/solutions/solution1" },
//       { title: "Solution 2", href: "/solutions/solution2" },
//       { title: "Solution 3", href: "/solutions/solution3" },
//     ],
//   },
//   { title: "About Us", href: "/about" },
//   { title: "Contact Us", href: "/contact" },
// ];

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
