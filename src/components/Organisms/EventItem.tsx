export const EventItem = () => {
  return (
    <a className="flex flex-col relative">
      <div className="absolute right-1 top-1 bg-slate-50 rounded-lg font-semibold text-sm p-1">
        R$30,00
      </div>
      <div className="flex items-center font-bold justify-center text-white absolute right-5 bottom-32 border-4 border-white bg-black rounded-full w-14 h-14">
        G
      </div>
      <img 
        className="bg-red-500 h-[160px] rounded-md" 
        src="https://img.freepik.com/free-vector/flat-hand-drawn-psychedelic-groovy-background_23-2148850121.jpg?w=2000"
      />      
      <div className="flex flex-col h-2/5 px-3 py-2">
        <p className="font-bold text-lg">
          Face Melting Destroyer
        </p>
        <p className="text-md text-sky-500">
          Sábado, 11 de novembro
        </p>
        <p className="text-md text-gray-400">
          The 169 house
        </p>
      </div>
    </a>
  )
}