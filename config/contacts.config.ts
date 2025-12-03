import type { Contact } from "@/lib/database/schema"

/**
 * Action handlers for the contacts table
 */
export interface ContactsTableActions {
    onToggleRead: (id: number, currentReadStatus: boolean) => void | Promise<void>
    onDelete: (id: number) => void | Promise<void>
    onView: (contact: Contact) => void
    deletingId?: number | null
}

/**
 * Field types for the dialog
 */
export type DialogFieldType = "text" | "email" | "date" | "textarea"

/**
 * Dialog field configuration
 */
export interface DialogField {
    label: string
    key: keyof Contact
    type?: DialogFieldType
}

/**
 * Column configuration for the table
 */
export interface TableColumn {
    header: string
    accessorKey?: keyof Contact
    headerClassName?: string
    className?: string
}

/**
 * Configuration class for the Contacts Table
 */
export class ContactsTableConfig {
    private actions: ContactsTableActions

    constructor(actions: ContactsTableActions) {
        this.actions = actions
    }

    /**
     * Get action handlers
     */
    getActions(): ContactsTableActions {
        return this.actions
    }

    /**
     * Get column configuration
     */
    getColumnsConfig(): TableColumn[] {
        return [
            {
                header: "Name",
                accessorKey: "name",
            },
            {
                header: "Email",
                accessorKey: "email",
            },
            {
                header: "Message",
                accessorKey: "message",
            },
            {
                header: "Date",
                accessorKey: "created_at",
            },
            {
                header: "Status",
            },
            {
                header: "Actions",
                headerClassName: "text-right",
                className: "text-right",
            },
        ]
    }

    /**
     * Get empty state configuration
     */
    getEmptyConfig() {
        return {
            title: "No contact submissions yet",
            description: "Messages from your public contact form will appear here",
        }
    }

    /**
     * Get dialog configuration for viewing contact details
     */
    getDialogConfig() {
        return {
            title: "Contact Message",
            descriptionPrefix: "Message from",
            fields: [
                { label: "Name", key: "name" as keyof Contact },
                { label: "Email", key: "email" as keyof Contact, type: "email" as const },
                { label: "Date", key: "created_at" as keyof Contact, type: "date" as const },
                { label: "Message", key: "message" as keyof Contact, type: "textarea" as const },
            ] as DialogField[],
        }
    }

    /**
     * Factory method to create a new instance
     */
    static create(actions: ContactsTableActions): ContactsTableConfig {
        return new ContactsTableConfig(actions)
    }
}
