export const RevalidateDashboard = async () => {
  await fetch("/api/revalidate", {
    method: "POST",
  });
  console.log("Revalidating dashboard");
  return { message: "Revalidating dashboard", status: 200 };
};
