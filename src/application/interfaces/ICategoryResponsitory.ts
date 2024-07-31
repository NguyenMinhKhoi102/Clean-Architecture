import Category from "../../domain/entities/Category";
import { CategoryResponse } from "../../infrastucture/responses/CategoryResponse";

interface ICategoryResponsitory {
  getCategories(): Promise<CategoryResponse>;
  createCategory(payload: Category): Promise<CategoryResponse>;
  updateCategory(id: string, payload: Category): Promise<CategoryResponse>;
  deleteCategory(id: string): Promise<CategoryResponse>;
}

export default ICategoryResponsitory;
