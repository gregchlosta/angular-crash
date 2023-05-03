export interface Task {
  id: number
  text: string
  day: string
  reminder: boolean
}

export interface CreateTask {
  text: string
  day: string
  reminder: boolean
}
