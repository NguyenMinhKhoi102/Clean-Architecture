import ICategoryResponsitory from "../../../application/interfaces/ICategoryResponsitory";
import Category from "../../entities/Category";

class UpdateCategory {
  private categoryResponsitory: ICategoryResponsitory;

  constructor(categoryResponsitory: ICategoryResponsitory) {
    this.categoryResponsitory = categoryResponsitory;
  }

  async execute(id: string, payload: Category): Promise<Category> {
    return await this.categoryResponsitory.updateCategory(id, payload);
  }
}

export default UpdateCategory;
