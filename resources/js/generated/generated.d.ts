declare namespace App {
namespace Dto {
export type Contact = {
id?: number,
name: string,
email: string,
message: string,
created_at?: string,
updated_at?: string,
};
export type Game = {
id: number | null,
name: string,
description: string,
link: string,
icon: string,
complete: boolean,
private: boolean,
created_at: string | null,
updated_at: string | null,
clips: App.Dto.GameClip[] | null,
};
export type GameClip = {
id: number | null,
url: string,
created_at: string | null,
updated_at: string | null,
game: App.Dto.Game | null,
};
export type Language = {
id: number | null,
name: string,
description: string,
created_at: string | null,
updated_at: string | null,
};
export type Newsletter = {
id?: number,
email: string,
created_at?: string,
updated_at?: string,
};
export type Project = {
id: number | null,
name: string,
description: string,
owner: string,
link: string,
icon: string,
complete: boolean,
private: boolean,
created_at: string | null,
updated_at: string | null,
tags: App.Dto.Tag[] | null,
};
export type Tag = {
id: number | null,
taggable_id: string,
taggable_type: string,
taggable: App.Dto.Taggable,
created_at: string | null,
updated_at: string | null,
};
export type Taggable = {
id?: number,
name: string,
description: string,
created_at?: string,
updated_at?: string,
};
export type TimelineEvent = {
id?: number,
from: string,
to: string,
name: string,
title: string,
icon: string,
body: string,
hidden: boolean,
created_at?: string,
updated_at?: string,
};
export type User = {
id?: number,
name: string,
email: string,
created_at?: string,
updated_at?: string,
};
namespace Pages {
export type HomePage = {
projects: App.Dto.Project[],
timeline: App.Dto.TimelineEvent[],
gameClips: App.Dto.GameClip[],
};
}
}
}
