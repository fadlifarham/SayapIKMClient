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
        title: 'Company', 
        href: '/dashboard/company'
      },
      {name: 'statistic', title: 'Statistic', badge: 'new', href: '/widgets/statistic'},
      {name: 'chart', title: 'Chart', href: '/widgets/chart'},
      {name: 'list', title: 'List', href: '/widgets/list'},
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
