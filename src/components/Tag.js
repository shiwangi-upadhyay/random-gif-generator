import React,{useState} from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';



const Tag = () => {
    const[tag, setTag] = useState("");

    const {gif, loading, fetchData} = useGif(tag);


  return (
    <div className='w-1/2   bg-blue-900 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>

        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>

        {
            loading ? (<Spinner/>) : (<img src={gif} alt='' width="450" />)
        }

        <input 
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event) => setTag(event.target.value)}
        value={tag} />

        <button className='w-10/12 bg-slate-200 text-lg py-2 rounded-lg mb-[20px]' 
        onClick={() => fetchData()} >

            Generate
        
        </button>
    
    </div>
  )
}

export default Tag