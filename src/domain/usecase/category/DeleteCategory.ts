import ICategoryResponsitory from "../../../application/interfaces/ICategoryRespository";
import { CategoryResponse } from "../../../infrastucture/responses/CategoryResponse";

class DeleteCategory {
  private categoryResponsitory: ICategoryResponsitory;

  constructor(categoryResponsitory: ICategoryResponsitory) {
    this.categoryResponsitory = categoryResponsitory;
  }

  async execute(id: string): Promise<CategoryResponse> {
    return await this.categoryResponsitory.deleteCategory(id);
  }
}

export default DeleteCategory;
