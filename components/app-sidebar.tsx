'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const items = useSelector((state: RootState) => state.sidebar.items);

  return (
    <Sidebar>
      <SidebarContent className="h-full overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupLabel>
            Problem Solutions
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a 
                      href={item.url} 
                      className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md transition-colors"
                    >
                      <span className="text-gray-500">{item.icon}</span>
                      <span className="text-gray-700 dark:text-gray-300 truncate">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
