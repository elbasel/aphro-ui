"use server";

import "server-only";
import { type AppUser } from "@/app/lib/user/type";

export const getUser = async (): Promise<AppUser> => {
  const appUser: AppUser = {
    name: "John Doe",
    email: "noemail@nodomain.com",
    imageUrl: "",
  };

  return appUser;
};
