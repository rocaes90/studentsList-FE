export interface APIResponse<T> {
  config: object
  data: T
  headers: object
  request: object
  status: number
  statusText: string
}

export interface APIResponseList {
  status: number
  data: {
    data: any[]
  }
}