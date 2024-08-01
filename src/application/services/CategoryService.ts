import Category from "../../domain/entities/Category";
import CreateCategory from "../../domain/usecase/category/CreateCategory";
import DeleteCategory from "../../domain/usecase/category/DeleteCategory";
import GetCategories from "../../domain/usecase/category/GetCategories";
import UpdateCategory from "../../domain/usecase/category/UpdateCategory";
import { CategoryResponse } from "../../infrastucture/responses/CategoryResponse";
import ICategoryRespository from "../interfaces/ICategoryRespository";

class CategoryService {
  private createCategoryUseCase: CreateCategory;
  private getCategoriesUseCase: GetCategories;
  private updateCategoryUseCase: UpdateCategory;
  private deleteCategoryUseCase: DeleteCategory;

  constructor(categoryRespository: ICategoryRespository) {
    this.createCategoryUseCase = new CreateCategory(categoryRespository);
    this.getCategoriesUseCase = new GetCategories(categoryRespository);
    this.updateCategoryUseCase = new UpdateCategory(categoryRespository);
    this.deleteCategoryUseCase = new DeleteCategory(categoryRespository);
  }

  async createCategory(category: Category): Promise<CategoryResponse> {
    return await this.createCategoryUseCase.execute(category);
  }

  async getCategories(): Promise<CategoryResponse> {
    return await this.getCategoriesUseCase.execute();
  }

  async updateCategory(
    id: string,
    category: Category
  ): Promise<CategoryResponse> {
    return await this.updateCategoryUseCase.execute(id, category);
  }

  async deleteCategory(id: string): Promise<CategoryResponse> {
    return await this.deleteCategoryUseCase.execute(id);
  }
}

export default CategoryService;
