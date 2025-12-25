import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useCalculatorAccess = () => {
  const router = useRouter();
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for access token in multiple places
    const token =
      sessionStorage.getItem("calc_access_token") ||
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("calc_access="))
        ?.split("=")[1];

    if (!token) {
      // No token found, redirect to lead form
      router.push("/project-cost-calculator/start");
    } else {
      setHasAccess(true);
    }

    setIsLoading(false);
  }, [router]);

  return { hasAccess, isLoading };
};
