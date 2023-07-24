import { GetServerSideProps } from "next";
import { CandyPay } from "@candypay/checkout-sdk";

export const getServerSideProps: GetServerSideProps<{
  repo: any;
}> = async () => {
  const sdk = new CandyPay({
    api_keys: {
      private_api_key: process.env.CANDYPAY_PRIVATE_API_KEY!,
      public_api_key: process.env.CANDYPAY_PUBLIC_API_KEY!,
    },
    network: "devnet", // use 'mainnet' for prod and 'devnet' for dev environment
    config: {
      collect_shipping_address: false,
    },
  });
  const response = await sdk.session.create({
    success_url: `${process.env.STATIC_URL}/success`,
    cancel_url: `${process.env.STATIC_URL}/cancel`,
    tokens: ["dust", "samo"],
    items: [
      {
        name: "Macbook Pro 14",
        price: 10,
        image:
          "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/macbook-pro-14-4.JPG",
        quantity: 1,
        size: "14",
      },
    ],
    shipping_fees: 0.5,
  });
  return {
    props: { repo: {} },
    redirect: {
      destination: response.payment_url,
      permanent: true,
    },
  };
};

const Pay = (props: any) => {
  console.log(props);
  return <div>Loading...</div>;
};

export default Pay;
