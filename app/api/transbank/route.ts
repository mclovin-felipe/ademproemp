import {
  WebpayPlus,
  Environment,
  IntegrationApiKeys,
  Options,
  IntegrationCommerceCodes,
} from "transbank-sdk";

type Data = {
  url?: string;
  token?: string;
  error?: string;
};

export async function POST(req: any, res: any) {
  const { buyOrder, sessionId, amount, returnUrl } = await req.json();
  const tx = new WebpayPlus.Transaction(
    new Options(
      IntegrationCommerceCodes.WEBPAY_PLUS,
      IntegrationApiKeys.WEBPAY,
      Environment.Integration
    )
  );
  console.log(buyOrder, sessionId, amount, returnUrl);

  try {
    const response = await tx.create(buyOrder, sessionId, amount, returnUrl);
    console.log(response);
    return Response.json(response);
  } catch (error) {
    console.error(error);
    return Response.error();
  }
}
