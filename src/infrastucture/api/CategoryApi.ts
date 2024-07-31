import Category from "../../domain/entities/Category";
import { CategoryResponse } from "../responses/CategoryResponse";
import createApiClient from "./BaseApi";
import type { AxiosInstance } from "axios";

class CategoryApi {
  api: AxiosInstance;

  constructor(baseUrl: string = "/api/category") {
    this.api = createApiClient(baseUrl);
  }

  async getCategories(): Promise<CategoryResponse> {
    return (await this.api.get("/")).data;
  }

  async createCategories(payload: Category): Promise<CategoryResponse> {
    return (await this.api.post("/", payload)).data;
  }

  async updateCategories(
    id: string,
    payload: Category
  ): Promise<CategoryResponse> {
    return (await this.api.patch(`/${id}`, payload)).data;
  }

  async deleteCategories(id: string): Promise<CategoryResponse> {
    return (await this.api.delete(`/${id}`)).data;
  }
}

export default new CategoryApi();
