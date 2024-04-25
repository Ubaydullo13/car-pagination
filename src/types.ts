export interface CarType {
    image: string,
    title: string,
    start_production: number,
    class: string,
}

export interface  ResponseType {
    next: {
      page: number,
      limit: number
    },
    previous: {
      page: number,
      limit: number
    }
    results: CarType[],
    total:number
  }