type AppState = {
    user: null | { id: string; email: string }
    tasks: Task[]
    loading: boolean
    error: string | null
  }
  
  export const initialState: AppState = {
    user: null,
    tasks: [],
    loading: false,
    error: null,
  }