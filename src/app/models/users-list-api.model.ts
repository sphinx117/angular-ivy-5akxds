import { Support } from './support.model';
import { User } from './user.model';

export interface UsersListApi {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}
