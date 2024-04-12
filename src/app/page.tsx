'use client'
import { useSelector , useDispatch} from "react-redux"
import  {increment, decrement , incrementByAmount} from "../app/Redux/Features/counter/counterSlice"
import { RootState } from "./Redux/store";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch()
  return (
  <main>
      <div className="flex flex-row gap-10 justify-center align-bottom mt-10 ">
      
         <button onClick={ ()=>dispatch(decrement())}> - </button>
         
         <span> {count}</span>
         <button onClick={ ()=>dispatch(increment())}> + </button>
        
    
      </div>
  </main>
  );
}
