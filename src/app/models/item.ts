export interface Item {
    title : string
    priority : Priority
    state : State
}

enum Priority {
    "Hight" = 2,
    "Medium" = 1,
    "Low" = 0
}

enum State {
    "Finished",
    "Not started",
    "To do"
}
