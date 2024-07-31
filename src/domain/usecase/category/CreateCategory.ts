import ICategoryResponsitory from "../../../application/interfaces/ICategoryResponsitory";
import { CategoryResponse } from "../../../infrastucture/responses/CategoryResponse";
import Category from "../../entities/Category";

class CreateCategory {
  private categoryResponsitory: ICategoryResponsitory;

  constructor(categoryResponsitory: ICategoryResponsitory) {
    this.categoryResponsitory = categoryResponsitory;
  }

  async execute(payload: Category): Promise<CategoryResponse> {
    return await this.categoryResponsitory.createCategory(payload);
  }
}

export default CreateCategory;
