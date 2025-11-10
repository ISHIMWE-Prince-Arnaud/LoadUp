import { Platform } from "../hooks/useGames";
import { Icon, HStack } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid, MdPhoneIphone, SiNintendo, BsGlobe  } from 'react-icons/all'

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
          const iconMap={
                    pc: FaWindows,
                    playstation: FaPlaystation,
                    xbox: FaXbox,
                    mac: FaApple,
                    nintendo: SiNintendo,
                    linux: FaLinux,
                    android: FaAndroid,
                    ios: MdPhoneIphone,
                    web: BsGlobe
          }
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug as keyof typeof iconMap]} color="gray.500" marginRight={2} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
