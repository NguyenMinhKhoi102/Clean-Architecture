import ICategoryResponsitory from "../../../application/interfaces/ICategoryResponsitory";

class DeleteCategory {
  private categoryResponsitory: ICategoryResponsitory;

  constructor(categoryResponsitory: ICategoryResponsitory) {
    this.categoryResponsitory = categoryResponsitory;
  }

  async execute(id: string): Promise<void> {
    return await this.categoryResponsitory.deleteCategory(id);
  }
}

export default DeleteCategory;
