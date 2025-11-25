"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useContacts } from "@/hooks/use-contacts"
import { ContactsTable } from "./contacts-table"

export default function ContactsPage() {
    const { contacts, isLoading, isFetching } = useContacts()

    return (
        <Card>
            <CardHeader>
                <CardTitle>All Contacts</CardTitle>
                <CardDescription>Messages from visitors who filled out your contact form</CardDescription>
            </CardHeader>
            <CardContent>
                {
                    isLoading ? <p>Loading...</p> :
                        isFetching ? <p>Updating...</p> :
                            <ContactsTable contacts={contacts} />
                }
            </CardContent>
        </Card>
    )
}
