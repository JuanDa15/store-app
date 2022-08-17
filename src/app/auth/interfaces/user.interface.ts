export interface User {
  email:    string;
  id:       number;
  name:     string;
  password: string;
 }
// Create
 export interface UserDTO extends Omit<User, 'id'> {
  verifyPassword?: string;
 }
//  Update
 export interface UpdateProductDTO extends Partial<UserDTO> {}
