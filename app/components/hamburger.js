// "use client";

// import { Disclosure } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// const Navbar = () => {
//   const menuItems = [
//     { id: 1, name: "Home", href: "/" },
//     { id: 2, name: "About", href: "/about" },
//     { id: 3, name: "Services", href: "/services" },
//     { id: 4, name: "Contact", href: "/contact" },
//   ];

//   return (
//     <Disclosure as="nav" className="bg-gray-800 text-white">
//       {({ open }) => (
//         <>
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between h-16">
//               <div className="flex items-center">
//                 <div className="text-2xl font-bold">MyApp</div>
//               </div>

//               {/* Hamburger Button */}
//               <div className="-mr-2 flex md:hidden">
//                 <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                 ) : (
//                   <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                 )}
//                 </Disclosure.Button>
//               </div>

//               {/* Desktop Menu */}
//               <div className="hidden md:flex space-x-4">
//                 {menuItems.map((item) => (
//                   <a
//                     key={item.id}
//                     href={item.href}
//                     className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           <Disclosure.Panel className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {menuItems.map((item) => (
//                 <a
//                   key={item.id}
//                   href={item.href}
//                   className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// };

// export default Navbar;
