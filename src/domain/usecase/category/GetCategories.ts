import ICategoryResponsitory from "../../../application/interfaces/ICategoryRespository";
import { CategoryResponse } from "../../../infrastucture/responses/CategoryResponse";
import Category from "../../entities/Category";

class GetCategories {
  private categoryResponsitory: ICategoryResponsitory;

  constructor(categoryResponsitory: ICategoryResponsitory) {
    this.categoryResponsitory = categoryResponsitory;
  }

  async execute(): Promise<CategoryResponse> {
    return await this.categoryResponsitory.getCategories();
  }
}

export default GetCategories;
