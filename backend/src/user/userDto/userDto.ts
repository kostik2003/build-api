export class trackingDto {
    id;
    tasks: string;
    discriptionTrack: string;
    author: any;
    nextDayDiscription: string;
    project: any;
    projectName: string;
    calendare: Date;
    authorId;
}

export class tasksDataDto {
    id;
    discriptionTask: string;
    name: string;
    time: string;
    isComplite: string;
    taskUser;
}
