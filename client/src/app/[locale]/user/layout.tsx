"use client"

import * as React from "react"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { SidebarUser } from "@/app/[locale]/user/_components/layout/sidebar-user"
import FooterUser from "@/app/[locale]/user/_components/layout/footer-user"
import Loader from "@/components/common/loader"
// import HeaderUser from "@/app/[locale]/user/_components/layout/header-user"

export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background">
            <SidebarProvider>
                <SidebarUser />
                <SidebarInset>
                    {/* <HeaderUser /> */}
                    <div className="flex flex-1 flex-col gap-4 p-4">
                        <React.Suspense fallback={<Loader />}>
                            {children}
                        </React.Suspense>
                    </div>
                    <FooterUser />
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}

