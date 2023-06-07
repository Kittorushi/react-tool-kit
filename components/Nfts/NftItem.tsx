import styled from "styled-components";
import { SafeImage } from "lib/ui/SafeImage";
import { VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";

interface Props {
  address: string;
  tokenId: string;
  imageUrl: string;
  title: string;
  onItemClick?: () => void;
}

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundGlass.toCssValue()};
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
`;

export const NftItem = ({
  title,
  address,
  tokenId,
  imageUrl,
  onItemClick,
}: Props) => {
  const handleClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };
  return (
    <VStack gap={20} onClick={handleClick}>
      <Text size={20}>{title}</Text>
      <ImageWrapper>
        <SafeImage
          src={imageUrl}
          render={(props) => <Image alt="title  " {...props} />}
        />
      </ImageWrapper>
      <VStack fullWidth gap={4}>
        <Text cropped weight="bold" color="supporting">
          <Text as="span" color="supporting3">
            Addr
          </Text>{" "}
          {address}
        </Text>
        <Text cropped weight="bold" color="supporting">
          <Text as="span" color="supporting3">
            Id
          </Text>{" "}
          {tokenId}
        </Text>
      </VStack>
    </VStack>
  );
};
