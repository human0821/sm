interface DecodedJWTToken {
  exp: number;
  is_active: boolean;
  roles: [];
  sub: string;
  type: string;
}
