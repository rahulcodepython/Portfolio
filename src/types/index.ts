export type Project = 'all' | 'python' | 'backend' | 'frontend' | 'fullstack';
export type ProjectName = 'Python' | 'Backend' | 'Frontend' | 'Full Stack';

export type ProjectTab = {
    name: string;
    value: Project;
};
export type ProjectItemType = {
    _id?: string;
    image: string;
    category: ProjectName;
    title: string;
    live?: string;
    github?: string;
    description: string;
    technologies: string[];
    pin?: boolean;
};

export type BlogItemType = {
    _id?: string;
    title: string;
    description: string;
    content: string;
    date: string;
    image: string;
};

export type MessageItemType = {
    _id?: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    unread: boolean;
};