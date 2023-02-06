import { Support } from './support.model';
import { User } from './user.model';

export interface UserApi {
  data: User;
  support: Support;
}
