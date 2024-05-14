import React from "react";
import Card from "./Card";

function Cards({users, handleRemoveBtn}) {
  return (
      <div className="w-full max-h-96 flex items-center justify-center flex-wrap overflow-auto">
        {users.map((item, index) => {
            return <Card handleRemoveBtn={handleRemoveBtn} id={index} user={item} key={index} />
        })}
      </div>
  );
}

export default Cards;
