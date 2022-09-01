const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
      ["Sonic", "Knuckles", "Tails"],
          [
              "https://w7.pngwing.com/pngs/690/928/png-transparent-sonic-the-hedgehog-sonic-knuckles-sonic-forces-sonic-colors-sonic-dash-hedgehog-animals-sonic-the-hedgehog-action-figure-thumbnail.png",
              "https://w7.pngwing.com/pngs/588/38/png-transparent-red-character-illustration-knuckles-the-echidna-sonic-knuckles-tails-sonic-mania-amy-rose-sonic-sonic-the-hedgehog-video-game-cartoon-thumbnail.png",
              "https://w7.pngwing.com/pngs/105/353/png-transparent-sonic-tail-the-fox-sonic-chaos-sonic-the-hedgehog-tails-adventure-sonic-knuckles-sonic-drift-sonic-mammal-carnivoran-dog-like-mammal-thumbnail.png",
          ],
      [100, 200, 300], // HP values
      [100, 50, 25] // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contrato implantado no endereço:", gameContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();