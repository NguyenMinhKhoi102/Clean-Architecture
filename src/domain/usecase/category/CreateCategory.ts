import ICategoryResponsitory from "../../../application/interfaces/ICategoryResponsitory";
import Category from "../../entities/Category";

class CreateCategory {
  private categoryResponsitory: ICategoryResponsitory;

  constructor(categoryResponsitory: ICategoryResponsitory) {
    this.categoryResponsitory = categoryResponsitory;
  }

  async execute(payload: Category): Promise<Category> {
    return await this.categoryResponsitory.createCategory(payload);
  }
}

export default CreateCategory;
