import styled from "styled-components";
import { NftItem } from "./NftItem";
import { useMyNftsQuery } from "./useMyNftsQuery";
import { da } from "date-fns/locale";
import { useRouter } from "next/router";

const Container = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, 300px);
  width: 100%;
`;

export const NftList = () => {
  const { data } = useMyNftsQuery();
  const router = useRouter();
  const handleNftItemClick = (address: string, tokenId: string) => {
    console.log(`Clicked NFT with address ${address} and tokenId ${tokenId}`);

    router.push({
      pathname: `/nfts/${address}`,
      query: { tokenId, address },
    });
  };

  return (
    <Container>
      {data?.ownedNfts.map((nft, index) => (
        <NftItem
          key={index}
          address={nft.contract.address}
          tokenId={nft.tokenId}
          imageUrl={nft.media?.[0]?.gateway}
          title={nft.title}
          onItemClick={() =>
            handleNftItemClick(nft.contract.address, nft.tokenId)
          }
        />
      ))}
    </Container>
  );
};
