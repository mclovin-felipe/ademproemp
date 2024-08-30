import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import {
  WebpayPlus,
  Environment,
  IntegrationApiKeys,
  Options,
  IntegrationCommerceCodes,
} from "transbank-sdk";

type Data = {
  error?: string;
  response?: any;
};

const handler = async (req: NextRequest, res: NextApiResponse<Data>) => {
  const { token } = await req.json();
  const tx = new WebpayPlus.Transaction(
    new Options(
      IntegrationCommerceCodes.WEBPAY_PLUS,
      IntegrationApiKeys.WEBPAY,
      Environment.Integration
    )
  );

  try {
    const response = await tx.commit(token);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};

export const POST = handler;
