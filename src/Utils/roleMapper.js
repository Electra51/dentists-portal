import { ROLE_NUMBERS } from "../Constants/roles";

export const getRoleName = (roleNumber) => {
  return ROLE_NUMBERS[roleNumber] || ROLE_NUMBERS[0];
};
