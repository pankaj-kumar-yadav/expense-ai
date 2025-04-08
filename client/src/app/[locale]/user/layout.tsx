"use client"

import * as React from "react"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { SidebarUser } from "@/app/[locale]/user/_components/layout/sidebar-user"
import FooterUser from "@/app/[locale]/user/_components/layout/footer-user"
import Loader from "@/components/common/loader"
import HeaderUser from "@/app/[locale]/user/_components/layout/header-user"

export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <SidebarUser />
            <SidebarInset className="overflow-hidden px-4 md:px-6 lg:px-8">
                <HeaderUser />
                <div className="flex flex-1 flex-col gap-4 p-4">
                    <React.Suspense fallback={<Loader />}>
                        {children}
                    </React.Suspense>
                </div>
                <FooterUser />
            </SidebarInset>
        </SidebarProvider>
    )
}

