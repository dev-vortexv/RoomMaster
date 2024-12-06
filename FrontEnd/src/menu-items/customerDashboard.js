// assets
import {
  IconHome,
  IconCalendarEvent,
  IconMail,
  IconFileUpload,
  IconFileInvoice,
  IconPhoneCall,
  IconAntennaBars5,
  IconChecklist,
  IconNotebook,
  IconPhoneCheck,
  IconUsers,
  IconUser,
  IconFileStack,
  IconNotification,
  IconMenu,
  IconCategory,
  IconReceipt,
  IconUserPlus
  } from '@tabler/icons';

  // constant
  const icons = {
  IconHome,
  IconCalendarEvent,
  IconMail,
  IconFileUpload,
  IconFileInvoice,
  IconPhoneCall,
  IconAntennaBars5,
  IconChecklist,
  IconNotebook,
  IconPhoneCheck,
  IconUsers,
  IconUser,
  IconFileStack,
  IconNotification,
  IconMenu,
  IconCategory,
  IconReceipt,
  IconUserPlus,
  };
  // ==============================|| SUB ADMIN USERS DASHBOARD MENU ITEMS ||============================== //
  const subdashboard = {
    title: 'Dashboard-Menu',
    type: 'Customer',
    children: [
      {
        id: 'default',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        icon: icons.IconHome,
        breadcrumbs: false
      },
      {
        id: '01',
        title: 'Payments',
        type: 'item',
        url: '/dashboard/payments',
        icon: icons.IconReceipt,
        breadcrumbs: false
      },
      {
        id: '02',
        title: 'Room Details',
        type: 'item',
        url: '/dashboard/room',
        icon : icons.IconFileInvoice,
        breadcrumbs: false
      },
      {
        id: '03',
        title: 'Student Reservation',
        type: 'item',
        url: '/dashboard/student_reservation',
        icon: icons.IconUsers,
        breadcrumbs: false
      },
      {
        id: '04',
        title: 'Resident Complaints',
        type: 'item',
        url: '/dashboard/complaints',
        icon : icons.IconFileStack,
        breadcrumbs: false
      },
      {
        id: '05',
        title: 'Visitor Details',
        type: 'item',
        url: '/dashboard/visitor',
        icon: icons.IconMail,
        breadcrumbs: false
      },
      {
        id: '06',
        title: 'Inventory',
        type: 'collapse',
        icon: icons.IconCategory ,
        children:[
          {
            id: '101',
            title: 'Canteen Inventory',
            type: 'item',
            url: '/dashboard/canteen_inventory',
            icon: icons.IconMenu,
            breadcrumbs: false
          },
          {
            id: '102',
            title: 'Purchase Inventory',
            type: 'item',
            url: '/dashboard/purches_inventory',
            icon: icons.IconMenu,
            breadcrumbs: false
          },
          {
            id: '103',
            title: 'Consume Inventory',
            type: 'item',
            url: '/dashboard/consume_inventory',
            icon: icons.IconMenu,
            breadcrumbs: false
          },
        ]
      },
     
      {
        id: '07',
        title: "Expenditure's",
        type: 'item',
        url: '/dashboard/expenditures',
        icon: icons.IconFileInvoice,
        breadcrumbs: false
      },
      {
        id: '08',
        title: 'Notice Board',
        type: 'item',
        url: '/dashboard/notice_board',
        icon: icons.IconNotification,
        breadcrumbs: false
      },
      {
        id: '09',
        title: 'Weekly Food Menu',
        type: 'item',
        url: '/dashboard/weekly_foodmenu',
        icon: icons.IconCategory,
        breadcrumbs: false
      }
    ]
  };
  export default subdashboard;
  
  
  
  
  
 