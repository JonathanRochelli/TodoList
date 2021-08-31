export interface Item {
    title : string
    priority : Priority
    state : State
}

export enum Priority {
    "Hight" = "2",
    "Medium" = "1",
    "Low" = "0"
}

export enum State {
    "To do" = "2",
    "In progress" = "1",
    "Finished" = "0"
}
