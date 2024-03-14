import { Service } from "@/services/services";
import { ResponseStatus } from "@/utils/constants";
import { useEffect, useState } from "react";

export function useAuth() {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  useEffect(() => {
    Service.verify().then((data) => {
      if (data.status === ResponseStatus.Ok) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);
  return isAuth;
}
