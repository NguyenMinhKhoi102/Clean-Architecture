import ICategoryResponsitory from "../../application/interfaces/ICategoryRespository";
import Category from "../../domain/entities/Category";
import categoryApi from "../api/CategoryApi";
import { CategoryResponse } from "../responses/CategoryResponse";

class CategoryResponsitory implements ICategoryResponsitory {
  async getCategories(): Promise<CategoryResponse> {
    return await categoryApi.getCategories();
  }
  async createCategory(payload: Category): Promise<CategoryResponse> {
    return await categoryApi.createCategories(payload);
  }

  async updateCategory(
    id: string,
    payload: Category
  ): Promise<CategoryResponse> {
    return await categoryApi.updateCategories(id, payload);
  }

  async deleteCategory(id: string): Promise<CategoryResponse> {
    return await categoryApi.deleteCategories(id);
  }
}

export default CategoryResponsitory;
