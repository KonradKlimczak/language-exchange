enum Role {
  User,
  Admin
}

export interface User {
  name: string;
  role: Role;
}
