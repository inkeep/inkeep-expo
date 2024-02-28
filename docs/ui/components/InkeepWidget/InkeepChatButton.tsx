import { InkeepChatButtonProps } from '@inkeep/widgets';
import dynamic from 'next/dynamic';

import useInkeepSettings from './useInkeepSettings';

const ChatButton = dynamic(() => import('@inkeep/widgets').then(mod => mod.InkeepChatButton), {
  ssr: false,
});

export const InkeepChatButton = () => {
  const { baseSettings, aiChatSettings, searchSettings, modalSettings } = useInkeepSettings();

  const chatButtonProps: InkeepChatButtonProps = {
    baseSettings,
    aiChatSettings,
    searchSettings,
    modalSettings,
  };

  return <ChatButton {...chatButtonProps} />;
};
