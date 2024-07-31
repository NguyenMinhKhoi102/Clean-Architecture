import ICategoryResponsitory from "../../../application/interfaces/ICategoryResponsitory";
import Category from "../../entities/Category";

class GetCategories {
  private categoryResponsitory: ICategoryResponsitory;

  constructor(categoryResponsitory: ICategoryResponsitory) {
    this.categoryResponsitory = categoryResponsitory;
  }

  async execute(): Promise<Category[]> {
    return await this.categoryResponsitory.getCategories();
  }
}

export default GetCategories;
