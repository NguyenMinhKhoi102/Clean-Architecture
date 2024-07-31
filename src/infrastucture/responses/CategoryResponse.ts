import Category from "../../domain/entities/Category";

export interface CategoryResponse {
  message: string;
  status: string;
  data?: Category | Category[];
  metadata?: any;
  errors?: any;
}
