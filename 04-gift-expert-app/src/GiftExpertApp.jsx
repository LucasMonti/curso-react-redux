import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories])
  }

    
  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory 
      type="text" 
      // setCategories = {setCategories}
      onNewCategory={ onAddCategory }
      />
    
      <ol>
        {categories.map((category) => (
           <GifGrid key={category} category={category}/>
        ))}
      </ol>
    </>
  );
}
