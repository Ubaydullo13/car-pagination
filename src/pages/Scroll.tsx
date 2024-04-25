import { useEffect, useState } from "react"
import { CarType } from "../types"
import Card from "../components/Card"

function Scroll() {
  const [cars, setCars] = useState<CarType[]>([]);
  const [fetching, setFetching] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  async function getData(limit: number, currentPage: number) {
    try {
      const data = await fetch(
        `http://localhost:3000/machines?limit=${limit}&page=${currentPage}`
      );
      const response = await data.json();
      setCars([...cars, ...response.results]);
      setFetching(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (fetching) {
        getData(9, currentPage);
    }
  }, [fetching, currentPage])

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function() {
        document.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  function scrollHandler() {
    const target = document.documentElement;
    if (target.scrollHeight - (target.scrollTop + window.innerHeight) < 100) {
        setFetching(true);
        setCurrentPage(currentPage => currentPage + 1)
    }
    
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
      </>
  )
}

export default Scroll