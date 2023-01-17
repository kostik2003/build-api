export class trackingDto {
    id;
    tasks: string;
    discription: string;
    author: any;
    nextDayDiscription: string;
    project: any;
    projectName: string;
    calendare: Date;
    authorId;
}

export class tasksDataDto {
    id;
    discription: string;
    name: string;
    time: string;
    isComplite: string;
    taskUser;
}
