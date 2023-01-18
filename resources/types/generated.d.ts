declare namespace App.Models.Data {
    export type Contact = {
        id: number
        name: string
        email: string
        message: string
        created_at: string
        updated_at: string
    }
    export type Project = {
        id: number
        name: string
        description: string
        owner: string
        link: string
        icon: string
        completed: boolean
        private: boolean
        created_at: string
        updated_at: string
        tags: Array<App.Models.Data.Tag>
    }
    export type Tag = {
        id: number
        taggable_id: string
        taggable_type: string
    }
    export type TimelineEvent = {
        id: number
        from: string
        to: string
        name: string
        title: string
        icon: string
        body: string
        hidden: boolean
        created_at: string
        updated_at: string
    }
    export type User = {
        id: number
        name: string
        email: string
    }
}
