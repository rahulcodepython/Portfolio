"use client"

import { useSettings } from "@/hooks/use-settings"
import { SettingsForm } from "./settings-form"

export default function SettingsPage() {
    const { settings, isLoading, isFetching } = useSettings()

    return (
        isLoading ? <p>Loading...</p> :
            isFetching ? <p>Fetching...</p> :
                settings ? <SettingsForm settings={settings} /> :
                    <p>No settings found</p>
    )
}
