export default defineAppConfig({
  ui: {
    primary: 'lime',
    gray: 'neutral',
    button: {
      font: 'font-light',
    },
    notifications: {
      position: 'left-0',
    },
    tooltip: {
      popper: {
        placement: 'top',
      },
    },
    table: {
      base: 'border',
      wrapper: 'relative overflow-x-auto',
      th: {
        base: 'text-left  whitespace-nowrap',
      },
      tr: {
        base: 'hover:bg-primary-500/20 hover:dark:bg-primary-400/20',
      },
      td: {
        base: 'whitespace-nowrap max-w-md overflow-x-auto scroll-smooth',
      },
      default: {
        sortAscIcon: 'i-solar-sort-from-top-to-bottom-linear',
        sortDescIcon: 'i-solar-sort-from-bottom-to-top-linear',
        sortButton: {
          icon: 'i-solar-sort-vertical-linear',
          class: 'font-bold',
        },
      },
    },
  },
  // 数据表格
  // variant can be solid (default), outline, soft or subtle.
  table: {
    emptyState: { icon: 'i-solar-ufo-3-linear', label: '暂无数据' },
    loadingState: { icon: 'i-solar-radar-2-linear', label: '加载中……' },
  },
  pagination: {
    activeButton: { variant: 'link' },
    inactiveButton: { variant: 'ghost' },
    prevButton: {
      icon: 'solar-alt-arrow-left-linear',
      variant: 'ghost',
      color: 'white',
    },
    nextButton: {
      icon: 'solar-alt-arrow-right-linear',
      variant: 'ghost',
      color: 'white',
    },
  },
});
