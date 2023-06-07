import { useWeb3React } from "@web3-react/core";
import { Alchemy, Network } from "alchemy-sdk";
import { createContext, useMemo } from "react";
import { ComponentWithChildrenProps } from "lib/shared/props";
import { createContextHook } from "lib/shared/utils/createContextHook";
import { Text } from "lib/ui/Text";
import { SupportedChain } from "./NetworkGuard";

interface AlchemyState {
  alchemySdk: Alchemy;
}

const AlchemyContext = createContext<AlchemyState | undefined>(undefined);

const supportedChainNetwork: Record<SupportedChain, Network> = {
  [SupportedChain.Mainnet]: Network.ETH_MAINNET,
  [SupportedChain.Goerli]: Network.ETH_GOERLI,
};

export const AlchemyProvider = ({ children }: ComponentWithChildrenProps) => {
  const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
  // const alchemyKey = "p5Gdfofpk98Ka2XOg1CK5SFamIJ7b4xW";
  const { chainId } = useWeb3React();

  const alchemySdk = useMemo(() => {
    if (!chainId || !alchemyKey) {
      return;
    }

    const settings = {
      apiKey: alchemyKey,
      network: supportedChainNetwork[chainId as SupportedChain],
    };

    return new Alchemy(settings);
  }, [alchemyKey, chainId]);

  if (chainId === undefined) {
    return <>{children}</>;
  }

  if (!alchemySdk) {
    return <Text>Alchemy key is missing</Text>;
  }

  return (
    <AlchemyContext.Provider value={{ alchemySdk }}>
      {children}
    </AlchemyContext.Provider>
  );
};

export const useAlchemy = createContextHook(AlchemyContext, "AlchemyContext");
