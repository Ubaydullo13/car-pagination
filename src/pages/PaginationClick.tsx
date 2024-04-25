import Card from "../components/Card"
import Pagination  from "@mui/material/Pagination"
import {CarType, ResponseType} from "../types"
import { useState, useEffect } from "react"

function PaginationClick() {
    const [cars, setCars] = useState<CarType[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(8)
    const [total, setTotal] = useState<number>(8)

    async function getData(limit:number, currentPage:number) {
        try {
          const resp = await fetch(`http://localhost:3000/machines?limit=${limit}&page=${currentPage}`)
          const data: ResponseType = await resp.json()
          setCars(data.results)
          setTotal(data.total)
        } catch (error) {
          console.log(error);
          
        }
      }

      useEffect(() => {
        getData(limit, currentPage)
      }, [])
    
       useEffect(() => {
        getData(limit, currentPage)
      }, [limit, currentPage])
    
      const handleChange = (_: React.ChangeEvent<unknown>, count: number) => {
        setCurrentPage(count)
        
      }
  return (
    <>
        <div className="flex flex-wrap gap-2 mb-3">
         {
          cars.length > 0 && cars.map((car, index) => {
            return (
              <Card key={index} image={car.image} title={car.title} start_production={car.start_production} class={car.class} />
            )
          })
         }
        </div>
        <div className="flex items-center justify-between mb-2">
        <div>
        <span>Limit: </span>
        <select value={limit} onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>{setLimit(Number((e.target.value)))}}>
            <option value={8}>8</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
          </select>
        </div>
        
        <Pagination count={Math.ceil(total/limit)} onChange={handleChange} variant="outlined" shape="rounded" />
        </div>
    </>
  )
}

export default PaginationClick