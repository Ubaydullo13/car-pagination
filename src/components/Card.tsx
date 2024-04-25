import { FC } from "react"

  interface CardProps {
  image: string,
  title: string,
  start_production: number,
  class:string,
}

const Card: FC<CardProps> =(props) => {
  return (
    <div className='flex flex-col w-[280px] border-2 border-cyan-950 rounded p-0.5'>
      <img className='rounded-t'  src={props.image} alt={props.title} />
      <h3 className='mt-0.5 text-2xl text-cyan-950 font-semibold'>{props.title}</h3>
        <p className='mb-1 text-gray-700'>
          {props.class}
        </p>
        <p className='bg-cyan-950 text-white text-center p-2 rounded w-16'>{props.start_production}</p>
    </div>
  )
}

export default Card