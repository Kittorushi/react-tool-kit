// import type {
//   NextPage,
//   NextPageContext,
//   InferGetServerSidePropsType,
// } from "next";
// import { RegularPage } from "lib/ui/page/RegularPage";
// import { Text } from "lib/ui/Text";
// import { useRouter } from "next/router";
// import { RectButton } from "lib/ui/buttons/rect/RectButton";
// import { PrimaryButton } from "lib/ui/buttons/rect/PrimaryButton";

// import Head from "next/head";

// export async function getServerSideProps(context: NextPageContext) {
//   try {
//     return {
//       props: { isConnected: true },
//     };
//   } catch (e) {
//     console.error(e);
//     return {
//       props: { isConnected: false },
//     };
//   }
// }

// interface Props {
//   // Add any necessary props here
// }

// const Home: NextPage<
//   Props &
//     InferGetServerSidePropsType<typeof getServerSideProps> & {
//       isConnected: boolean;
//     }
// > = ({ isConnected }) => {
//   const router = useRouter();

//   function goNFT() {
//     router.push("/nfts");
//   }

//   return (
//     <RegularPage title="React Toolkit">
//       <Text>✨ Explore tools and components from the sidebar</Text>
//       <PrimaryButton onClick={goNFT}>Go to NFT</PrimaryButton>

//       {isConnected ? (
//         <h2 className="subtitle">You are connected to MongoDB</h2>
//       ) : (
//         <h2 className="subtitle">
//           You are NOT connected to MongoDB. Check the <code>README.md</code> for
//           instructions.
//         </h2>
//       )}
//     </RegularPage>
//   );
// };

// export default Home;
