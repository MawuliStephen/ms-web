// components/MenuComponent.tsx
'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Updated hook for App Router
import GetMenuData from '../../../dummyData/menu'; // Importing the mock data

interface MenuItem {
  name: string;
  url: string;
  isAvailable?: boolean; // Indicates if the menu item is available from the backend
}

const MenuComponent = ({ items, closeSidebarAndNavigate }: { items: MenuItem[]; closeSidebarAndNavigate: () => void }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state for dynamic menu fetching
  const [backendMenuItems, setBackendMenuItems] = useState<MenuItem[]>([]); // State for backend data
  const [mounted, setMounted] = useState<boolean>(false); // Track whether the component is mounted
  const pathname = usePathname(); // Use the usePathname hook to track the current route

  // Fetch dynamic menu items from the backend API
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        // const response = await getData('/api/menu'); // Call the API to fetch dynamic menu
        const response = await GetMenuData('/menu');
        setBackendMenuItems(response.menu); // Assume API returns a list of menu items
        setIsLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching menu data:', error);
        setIsLoading(false); // Set loading to false even if there is an error
      }
    };

    fetchMenuData(); // Fetch menu data on component mount
    setMounted(true); // Safe to use hooks after the component has mounted
  }, []);

  // Combine frontend and backend menu items
  const frontendMenuItems: MenuItem[] = [
    { name: 'Dashboard', url: '/dashboard' },
    { name: 'About', url: '/about' },
    { name: 'Logout', url: '/logout' },
    { name: 'Profile', url: '/profile' },
  ];

  const combinedMenuItems = [...frontendMenuItems, ...backendMenuItems];

  // Use the passed items or the combined menu
  const menuToRender = items.length > 0 ? items : combinedMenuItems;

  if (!mounted) {
    return null; // Or show a loading spinner, as we can't use the router before mounting
  }

  if (isLoading) {
    return <div>Loading menu...</div>; // Show a loading spinner or message while fetching menu data
  }

  return (
    <div>
      <ul>
        {menuToRender.map((item, index) => {
          // Only display the menu item if it's available from the backend or it's a frontend item
          if (item.isAvailable !== false) {
            const isActive = pathname === item.url; // Use pathname to check if the current route matches the menu item's URL
            return (
              <li key={index}>
                <Link href={item.url} className={isActive ? 'text-blue-500 font-bold' : '' } onClick={closeSidebarAndNavigate}>
                  
                    {item.name}
                  {/* </a> */}
                </Link>
              </li>
            );
          }
          return null; // If the item is not available (from the backend), don't render it
        })}
      </ul>
    </div>
  );
};

export default MenuComponent;




// // components/MenuComponent.tsx
// 'use client'

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation'; // Updated hook for App Router
// // import { getData } from '../utils/api'; // Assuming `getData` is an API utility to fetch data

// import GetMenuData from '../../../dummyData/menu'; // Importing the mock data

// // import menu from '../../../dummyData'; // Importing the mock data




// interface MenuItem {
//   name: string;
//   url: string;
//   isAvailable?: boolean; // Indicates if the menu item is available from the backend
// }

// const MenuComponent = ({ items }: { items: MenuItem[] }) => {
//   const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state for dynamic menu fetching
//   const [backendMenuItems, setBackendMenuItems] = useState<MenuItem[]>([]); // State for backend data
//   const [mounted, setMounted] = useState<boolean>(false); // Track whether the component is mounted
//   const pathname = usePathname(); // Use the usePathname hook to track the current route

//   // Fetch dynamic menu items from the backend API
//   useEffect(() => {
//     const fetchMenuData = async () => {
//       try {
//         // const response = await getData('/api/menu'); // Call the API to fetch dynamic menu 
//         const response = await GetMenuData('/menu');
//         // getData('/munu');
        
//         setBackendMenuItems(response.menu); // Assume API returns a list of menu items
//         console.log('Menu from Api', response.menu);
//         setIsLoading(false); // Set loading to false once data is fetched
//       } catch (error) {
//         console.error('Error fetching menu data:', error);
//         setIsLoading(false); // Set loading to false even if there is an error
//       }
//     };

//     fetchMenuData(); // Fetch menu data on component mount

//     // After mounting the component, we can safely use the router hook
//     setMounted(true);
//   }, []);

//   // Combine frontend and backend menu items (only if needed)
//   const frontendMenuItems: MenuItem[] = [
//     { name: 'Dashboard', url: '/dashboard' },
//     { name: 'About', url: '/about' },
//     // { name: 'Search', url: '/search' },
//     { name: 'Logout', url: '/logout' },
//     { name: 'Profile', url: '/profile' },
//   ];

//   const combinedMenuItems = [...frontendMenuItems, ...backendMenuItems];

//   // Only show items passed via the `items` prop or from backend/frontend
//   const menuToRender = items.length > 0 ? items : combinedMenuItems;

//   if (!mounted) {
//     return null; // Or show a loading spinner, as we can't use the router before mounting
//   }

//   if (isLoading) {
//     return <div>Loading menu...</div>; // Show a loading spinner or message while fetching menu data
//   }

//   return (
//     <div>
//       <ul>
//         {menuToRender.map((item, index) => {
//           // Only display the menu item if it's available from the backend or it's a frontend item
//           if (item.isAvailable !== false) {
//             const isActive = pathname === item.url; // Use pathname to check if the current route matches the menu item's URL
//             return (
//               <li key={index}>
//                 <Link href={item.url} className={isActive ? 'text-blue-500 font-bold' : ''}>
             
//                     {item.name}
                  
//                 </Link>
//               </li>
//             );
//           }
//           return null; // If the item is not available (from the backend), don't render it
//         })}
//       </ul>
//     </div>
//   );
// };

// export default MenuComponent;



