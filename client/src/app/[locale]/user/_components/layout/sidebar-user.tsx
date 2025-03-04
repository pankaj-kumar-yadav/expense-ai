"use client";

import * as React from "react";
import {
    Trophy,
    Frame,
    Map,
    PieChart,
    FlaskConical,
    House,
    BookOpen,
    Vote,
    Bell,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAuthStore } from "@/store/use-auth-store";
import Image from "next/image";
import Link from "next/link";
import { appLogo, appName, appType } from "@/constants/app-info/app-info-constants";
import { NavCustom } from "@/components/nav-custom";
import { customImageLoader } from "@/utils/image/image";

// const getCoursesItems = () => {
//   const _dArr = [
//     {
//       title: "My Courses",
//       url: "/user/my-courses",
//     },
//     {
//       title: "Favorite Courses",
//       url: "/user/favorite-courses",
//     },
//   ];
//   if (process.env.NEXT_PUBLIC_ADMIN_COURSE == "false") {
//     _dArr.push({
//       title: "Explore Courses",
//       url: "/user/explore-courses",
//     });
//   }

//   return _dArr;
// };

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Home",
            url: "/user",
            icon: House,
            items: [],
        },
        // process.env.NEXT_PUBLIC_REQUIRE_PAYMENT === "true" && {
        //   title: "Explore Courses",
        //   url: "/user/explore-course",
        //   icon: LayoutDashboard,
        //   items: [],
        // },

        {
            title: "My Learning Path",
            url: "/user/skill-path",
            icon: FlaskConical,
            items: [],
        },
        {
            title: "Courses",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "My Courses",
                    url: "/user/my-courses",
                },
                {
                    title: "Favorite Courses",
                    url: "/user/favorite-courses",
                },
            ],
        },
        {
            title: "Certificates",
            url: "/user/certification",
            icon: Trophy,
            isActive: true,
        },
        {
            title: "Polls & Surveys",
            url: "#",
            icon: Vote,
            isActive: true,
            items: [
                {
                    title: "Polls",
                    url: "/user/poll",
                    isActive: true,
                },
                {
                    title: "Surveys",
                    url: "/user/survey",
                    isActive: true,
                },
            ],
        },
        // {
        //     title: "Chat with Expert",
        //     url: "/user/certification",
        //     icon: ChatBubbleIcon,
        //     isActive: false,
        //     disabled: true,
        // },
        // {
        //     title: "Settings",
        //     url: "#",
        //     icon: Settings2,
        //     items: [
        //         {
        //             title: "General",
        //             url: "/user/settings/general",
        //         },
        //         {
        //             title: "Appearance",
        //             url: "/user/settings/appearance",
        //         },
        //     ],
        // },
    ],
    navSecondary: [
        {
            title: "Notifications",
            url: "/user/notifications",
            icon: Bell,
        },
        // {
        //   title: "Support",
        //   url: "/user/support",
        //   icon: LifeBuoy,
        // },
        // {
        //   title: "Feedback",
        //   url: "/user/feedback",
        //   icon: Send,
        // },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
};

export function SidebarUser({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { userData } = useAuthStore();

    const user = React.useMemo(() => {
        if (!userData) {
            return {
                name: "Guest User",
                email: "guest@example.com",
                avatar: "https://api.dicebear.com/6.x/initials/svg?seed=GU",
                fallbackLetter: "GU",
            };
        }

        return {
            name: `${userData?.first_name} ${userData?.middle_name ? userData?.middle_name : ""} ${userData?.last_name}`,
            first_name: userData?.first_name,
            email: userData?.email,
            avatar: `https://api.dicebear.com/6.x/initials/svg?seed=${userData?.first_name.charAt(
                0
            )}${userData?.last_name.charAt(0)}`,
            fallbackLetter: `${userData?.first_name.charAt(0)}${userData?.last_name.charAt(0)}`,
        };
    }, [userData]);

    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/user">
                                {/* <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div> */}
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                                    <Image
                                        src={appLogo}
                                        alt={appName}
                                        loader={() => customImageLoader({ src: appLogo, width: 32, quality: 100 })}
                                        width={32}
                                        height={32}
                                        quality={100}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="rounded-md"
                                    />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">{appName}</span>
                                    <span className="truncate text-xs">{appType}</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavCustom userName={user?.first_name} />
                {/* <NavMain items={data.navMain?.filter((item) => item !== false)} /> */}
                <NavMain items={data.navMain} />
                {/* <NavProjects projects={data.projects} /> */}
                {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
            </SidebarContent>
            {/* <SidebarFooter>
        <NavUser user={user} role="user" />
      </SidebarFooter> */}
        </Sidebar>
    );
}
