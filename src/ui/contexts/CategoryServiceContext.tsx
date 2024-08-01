import React, { ReactNode, createContext, useContext } from "react";
import CategoryService from "../../application/services/CategoryService";
import CategoryRepository from "../../infrastucture/respositories/CategoryRepository";

const categoryService = new CategoryService(new CategoryRepository());

const CategoryServiceContext = createContext<CategoryService>(categoryService);
export const CategoryServiceProvider = ({
  children,
}: {
  children: ReactNode;
}) => (
  <CategoryServiceContext.Provider value={categoryService}>
    {children}
  </CategoryServiceContext.Provider>
);

export const useCategoryService = (): CategoryService =>
  useContext(CategoryServiceContext);
