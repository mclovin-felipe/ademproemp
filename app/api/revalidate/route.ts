import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
const hanlder = async (req: NextRequest, res: NextResponse) => {
  revalidatePath("/dashboard");
  return NextResponse.json({ message: "Revalidating dashboard", status: 200 });
};
export const POST = hanlder;
