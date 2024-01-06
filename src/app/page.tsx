"use client"
import { useDispatch, useSelector } from 'react-redux';
import { setCounter } from '../state/counter/counter'
import { setStructureData, setStructureError, setStructureLoading, StructState } from '../state/structure/structure'
import { useEffect } from 'react';
import StoreProvider from './store_provider';


interface CounterState {
  counter: number
}

console.log("setUserData", setCounter);

export default function Home() {

  const dispatch = useDispatch();
  const counterState = useSelector((state: { counter: CounterState }) => state.counter);
  const structState = useSelector((state: { struct: StructState }) => state.struct);

  // useEffect(() => {
  //   console.log("structState", structState);
  //   (async () => {
  //     const response = await (await fetch(`http://localhost:8000/comp/get_profile?rcsb_id=3j7z`)).json()
  //     console.log("response", response)
  //     // console.log("response", response.json());
  //   })()
  // })

  useEffect(() => {
    async function fetchStructData() {
      try {
        dispatch(setStructureLoading(true));
        const response = (await fetch(`http://localhost:8000/comp/get_profile?rcsb_id=3j7z`)).json()
        dispatch(setStructureData(response))
        dispatch(setStructureLoading(false));
      } catch (error: any) {
        dispatch(setStructureLoading(error.message));
        dispatch(setStructureLoading(false));
      }
    }



    fetchStructData();
  }, [dispatch]);

  return (
    <StoreProvider >
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>struct id:{structState.data.pdbid}</div>
        <div>struct authors:{structState.data.authors}</div>
        <div>struct title:{structState.data.title}</div>

        <button onClick={() => { alert("incremented") }}>increment counter</button>
        counter :{counterState.counter}
      </main>
    </StoreProvider>
  )
}

