import Category from "../../domain/entities/Category";

interface ICategoryResponsitory {
  getCategories(): Promise<Category[]>;
  createCategory(payload: Category): Promise<Category>;
  updateCategory(id: string, payload: Category): Promise<Category>;
  deleteCategory(id: string): Promise<void>;
}

export default ICategoryResponsitory;
