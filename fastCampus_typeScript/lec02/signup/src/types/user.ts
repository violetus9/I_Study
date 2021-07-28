// 사용자 입력 데이터에대한 객체화

import { Address } from './address';

type User = {
  name: string;
  id: string;
  email: string;
  password: string;
  address?: Address;
};

export default User;
