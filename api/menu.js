const Menu = [
  {header: 'Apps'},
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'Dashboard',
    href: '/dashboard',
    items: [
      {
        name: 'company', 
        title: 'Perusahaan', 
        href: '/dashboard/company',
        items: [
          {
            name: 'id', 
            title: 'ID Perusahaan',
            href: '/dashboard/company/:id/proyek',
            // items: [
            //   {
            //     name: 'proyek', 
            //     title: 'Proyek', 
            //     href: '/dashboard/company/(.*)/proyek'
            //   }
            // ]
          }
        ]
      },
      {
        name: 'investor', 
        title: 'Investor', 
        href: '/dashboard/investor'
      },
      
    ]
  },
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
