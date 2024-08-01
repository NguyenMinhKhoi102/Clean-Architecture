import React, { useEffect, useState } from "react";
import Category from "../../domain/entities/Category";
import { CategoryResponse } from "../../infrastucture/responses/CategoryResponse";
import { useCategoryService } from "../contexts/CategoryServiceContext";

const CategoryList = () => {
  const [categories, setCategories] = useState<CategoryResponse>();
  const categoryService = useCategoryService();

  useEffect(() => {
    categoryService.getCategories().then(setCategories);
  }, [categoryService]);
  return (
    <>
      <h1>Category List</h1>
      <ul>
        {Array.isArray(categories?.data) &&
          categories?.data.map((categories) => (
            <li key={categories.id}>{categories.name}</li>
          ))}
      </ul>
    </>
  );
};

export default CategoryList;
