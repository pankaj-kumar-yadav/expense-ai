"use client"

import * as React from "react"
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { UserRound } from "lucide-react"

// Menu items.
const items = [
    {
        title: "Welcome",
        url: "#",
        icon: UserRound,
    },
]
interface Props {
    userName: string | undefined
}

export function NavCustom({ userName }: Props) {
    return (
        <SidebarGroup>
            {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <a href={item.url}>
                                    <item.icon />
                                    <span className="font-semibold">{`${item.title} ${userName}`} </span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}

