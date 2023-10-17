import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/profile`}>Account Profile</Link>,
          key: `/${role}/profile`,
        }
      ],
    },
    {
      label: "Feedback",
      key: "feedback",
      icon: <Link href={`/${role}/feedback`}><ScheduleOutlined /></Link>,
    },
  ];


  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "User Management",
      key: "user-management",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/users`}>Users</Link>,
          key: `/${role}/academic/semester`,
        },
        {
          label: <Link href={`/${role}/add-user`}>Add User</Link>,
          key: `/${role}/add-user`,
        }
      ],
    },
    {
      label: "Service Management",
      key: "service_management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/services`}>Services</Link>,
          key: `/${role}/services`,
        },
        {
          label: <Link href={`/${role}/add-service`}>Add Service</Link>,
          key: `/${role}/add-service`,
        },
        {
          label: <Link href={`/${role}/delete-service`}>Delete Service</Link>,
          key: `/${role}/delete-service`,
        }
      ],
    },
    {
      label: "Booking Management",
      key: "booking_management",
      icon: <ThunderboltOutlined />,
      children: [
        {
          label: <Link href={`/${role}/bookings`}>Bookings</Link>,
          key: `/${role}/bookings`,
        }
      ],
    },
    {
      label: "blog Management",
      key: "blog_management",
      icon: <CreditCardOutlined />,
      children: [
        {
          label: <Link href={`/${role}/blogs`}>blogs</Link>,
          key: `/${role}/blogs`,
        },
        {
          label: <Link href={`/${role}/edit-blogs`}>add blogs</Link>,
          key: `/${role}/add-blogs`,
        }
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "User Management",
      key: "user-management",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/users`}>Users</Link>,
          key: `/${role}/academic/semester`,
        },
        {
          label: <Link href={`/${role}/add-user`}>Add User</Link>,
          key: `/${role}/add-user`,
        }
      ],
    },
  ];

  

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
