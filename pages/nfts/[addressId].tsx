import { useRouter } from "next/router";

const NftDetail = () => {
  const router = useRouter();
  const { address } = router.query;
  const tokenId = router.query.tokenId as string;

  // Use the address and tokenId to fetch the NFT data

  return (
    <div>
      <h1>NFT detail page</h1>
      <p>Address: {address}</p>
      <p>Token ID: {tokenId}</p>
    </div>
  );
};

export default NftDetail;
