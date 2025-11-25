"use client"

import type { ColumnDef } from "@/components/generic/data-table"
import { DataTable } from "@/components/generic/data-table"
import { DeleteModal } from "@/components/generic/delete-modal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ContactsTableConfig, type DialogField } from "@/config/contacts.config"
import { useContacts } from "@/hooks/use-contacts"
import type { Contact } from "@/lib/database/schema"
import { Mail, MailOpen, Trash2 } from "lucide-react"
import { useMemo, useState } from "react"

interface ContactsTableProps {
    contacts: Contact[]
}

export function ContactsTable({ contacts: initialContacts }: ContactsTableProps) {
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
    const [isOpen, setIsOpen] = useState(false)

    // Use React Query hook for contacts operations
    const { updateContactRead, deleteContact, isUpdatingRead, isDeleting } = useContacts()

    const handleDelete = async (id: number) => {
        await deleteContact(id.toString())
    }

    const handleToggleRead = async (id: number, currentReadStatus: number) => {
        await updateContactRead(id.toString(), { read: currentReadStatus !== 0 })
    }

    const handleViewContact = async (contact: Contact) => {
        setSelectedContact(contact)
        setIsOpen(true)

        if (contact.read === 0) {
            await handleToggleRead(contact.id, 0)
        }
    }

    // Create table configuration with actions
    const tableConfig = useMemo(
        () =>
            ContactsTableConfig.create({
                onToggleRead: handleToggleRead,
                onDelete: handleDelete,
                onView: handleViewContact,
                deletingId: null,
            }),
        []
    )

    // Get configuration data
    const columnsConfig = tableConfig.getColumnsConfig()
    const emptyConfig = tableConfig.getEmptyConfig()
    const dialogConfig = tableConfig.getDialogConfig()
    const actions = tableConfig.getActions()

    // Build column definitions with JSX rendering
    const columns: ColumnDef<Contact>[] = columnsConfig.map((col) => {
        const column: ColumnDef<Contact> = {
            header: col.header,
            accessorKey: col.accessorKey,
            headerClassName: col.headerClassName,
            className: col.className,
        }

        // Add custom cell renderers based on column
        if (col.accessorKey === "name") {
            column.cell = (contact) => (
                <div className="flex items-center gap-2">
                    <p className="font-medium text-foreground">{contact.name}</p>
                    {contact.read === 0 && <span className="h-2 w-2 rounded-full bg-accent" />}
                </div>
            )
        } else if (col.accessorKey === "email") {
            column.cell = (contact) => <p className="text-sm text-muted-foreground">{contact.email}</p>
        } else if (col.accessorKey === "message") {
            column.cell = (contact) => (
                <p className="text-sm text-muted-foreground line-clamp-2 max-w-md">
                    {contact.message.slice(0, 50) + "..."}
                </p>
            )
        } else if (col.accessorKey === "created_at") {
            column.cell = (contact) => (
                <p className="text-sm text-muted-foreground">
                    {new Date(contact.created_at).toLocaleDateString()}
                </p>
            )
        } else if (col.header === "Status") {
            column.cell = (contact) =>
                contact.read === 0 ? (
                    <Badge variant="default">Unread</Badge>
                ) : (
                    <Badge variant="secondary">Read</Badge>
                )
        } else if (col.header === "Actions") {
            column.cell = (contact) => (
                <div
                    className="flex justify-end gap-2"
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                            e.stopPropagation()
                            actions.onToggleRead(contact.id, contact.read)
                        }}
                        title={contact.read === 0 ? "Mark as read" : "Mark as unread"}
                        disabled={isUpdatingRead}
                    >
                        {contact.read === 0 ? <MailOpen className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                    </Button>
                    <DeleteModal
                        isDeleting={isDeleting}
                        onDelete={actions.onDelete}
                        id={contact.id}
                    >
                        <Button
                            variant="ghost"
                            size="sm"
                            disabled={isDeleting}
                        >
                            <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                    </DeleteModal>
                </div>
            )
        }

        return column
    })

    // Show custom empty state if no contacts
    if (initialContacts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <Mail className="mb-4 h-12 w-12 text-muted-foreground" />
                <p className="text-muted-foreground">{emptyConfig.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{emptyConfig.description}</p>
            </div>
        )
    }

    return (
        <>
            <DataTable<Contact>
                data={initialContacts}
                columns={columns}
                emptyMessage={emptyConfig.title}
                onRowClick={handleViewContact}
            />

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>{dialogConfig.title}</DialogTitle>
                        <DialogDescription>
                            {dialogConfig.descriptionPrefix} {selectedContact?.name}
                        </DialogDescription>
                    </DialogHeader>
                    {selectedContact && (
                        <div className="space-y-4">
                            {dialogConfig.fields.map((field: DialogField) => (
                                <div key={field.key}>
                                    <p className="text-sm font-medium text-muted-foreground">{field.label}</p>
                                    {field.type === "email" ? (
                                        <a
                                            href={`mailto:${selectedContact[field.key]}`}
                                            className="text-accent hover:underline"
                                        >
                                            {String(selectedContact[field.key])}
                                        </a>
                                    ) : field.type === "date" ? (
                                        <p className="text-foreground">
                                            {new Date(selectedContact[field.key] as string).toLocaleString()}
                                        </p>
                                    ) : field.type === "textarea" ? (
                                        <p className="text-foreground whitespace-pre-wrap">
                                            {String(selectedContact[field.key])}
                                        </p>
                                    ) : (
                                        <p className="text-foreground">{String(selectedContact[field.key])}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}
