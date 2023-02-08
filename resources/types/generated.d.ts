declare namespace App.Models.Data {
    export type Contact = {
        id?: number;
        name: string;
        email: string;
        message: string;
        created_at?: string;
        updated_at?: string;
    };
    export type Game = {
        id?: number;
        name: string;
        description: string;
        link: string;
        icon: string;
        complete: boolean;
        private: boolean;
        created_at?: string;
        updated_at?: string;
        clips?: Array<App.Models.Data.GameClip>;
    };
    export type GameClip = {
        id?: number;
        url: string;
        created_at?: string;
        updated_at?: string;
        game?: App.Models.Data.Game;
    };
    export type Language = {
        id?: number;
        name: string;
        description: string;
        created_at?: string;
        updated_at?: string;
    };
    export type Newsletter = {
        id?: number;
        email: string;
        created_at?: string;
        updated_at?: string;
    };
    export type Project = {
        id?: number;
        name: string;
        description: string;
        owner: string;
        link: string;
        icon: string;
        complete: boolean;
        private: boolean;
        created_at?: string;
        updated_at?: string;
        tags?: Array<App.Models.Data.Tag>;
    };
    export type Tag = {
        id?: number;
        taggable_id: string;
        taggable_type: string;
        taggable: App.Models.Data.Taggable;
        created_at?: string;
        updated_at?: string;
    };
    export type Taggable = {
        id?: number;
        name: string;
        description: string;
        created_at?: string;
        updated_at?: string;
    };
    export type TimelineEvent = {
        id?: number;
        from: string;
        to: string;
        name: string;
        title: string;
        icon: string;
        body: string;
        hidden: boolean;
        created_at?: string;
        updated_at?: string;
    };
    export type User = {
        id?: number;
        name: string;
        email: string;
        created_at?: string;
        updated_at?: string;
    };
}
