import React from "react";

function Card({user, handleRemoveBtn, id}) {
  return (
    <>
      <div className="w-44 p-2 bg-zinc-300 rounded-md flex flex-col gap-2 items-center justify-center m-2">
        <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={user.image} alt="" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-bold text-md text-center">{user.name}</h1>
        <h2 className="opacity-60 font-semibold text-xs -mt-1">{user.email}</h2>
        <p className="text-xs text-center font-medium"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, inventore. </p>
        <button onClick={()=>handleRemoveBtn(id)} className="bg-red-700 text-white px-3 mt-1 rounded-md text-sm font-semibold py-1">Remove</button>
      </div>
    </>
  );
}

export default Card;
