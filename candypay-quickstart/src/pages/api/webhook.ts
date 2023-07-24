import { verifyWebhookSignature } from "@candypay/checkout-sdk";

const handler = async (req, res) => {
  const headers = req.headers;
  const payload = req.body;

  try {
    await verifyWebhookSignature({
      payload: JSON.stringify(payload),
      headers: headers as Record<string, string>,
      webhook_secret: process.env.WEBHOOK_SECRET!,
    });
    console.log(payload);
  } catch (err) {
    return res.status(400).json({
      message: "Invalid webhook signature",
    });
  }

  return res.send();
};

export default handler;
