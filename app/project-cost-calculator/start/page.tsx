import LeadForm from "./LeadForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function StartPage() {
  // Read cookies synchronously (server-side)
  // const cookieStore = await cookies();
  // const calcAccess = cookieStore.get("calc_access")?.value;

  // // Redirect immediately if user already has access
  // if (calcAccess === "yes") {
  //   redirect("/project-cost-calculator/app");
  // }

  return (
    <div className="max-w-2xl mx-auto py-16">
      <h1 className="text-3xl font-bold mb-6">Before You Begin</h1>
      <p className="text-muted-foreground mb-8">
        Tell us a bit about your project and unlock the full cost estimator.
      </p>

      {/* Client-side form */}
      <LeadForm />
    </div>
  );
}
