import { useTheme } from '@expo/styleguide';
import type {
  InkeepAIChatSettings,
  InkeepSearchSettings,
  InkeepWidgetBaseSettings,
  InkeepModalSettings,
} from '@inkeep/widgets';

type InkeepSharedSettings = {
  baseSettings: InkeepWidgetBaseSettings;
  aiChatSettings: InkeepAIChatSettings;
  searchSettings: InkeepSearchSettings;
  modalSettings: InkeepModalSettings;
};

const useInkeepSettings = (): InkeepSharedSettings => {
  const { themeName } = useTheme();
  const isAutoColorMode = themeName === 'auto';
  const colorMode = isAutoColorMode ? undefined : themeName;
  const baseSettings: InkeepWidgetBaseSettings = {
    apiKey: '919a5ac4b89a3afa4b4e55ce191359fb34eca35564183ccc',
    integrationId: 'clt59pzv400006zpsyb27yw11',
    organizationId: 'org_RMAAGhVjqaif9Y7B',
    primaryBrandColor: '#0081f1',
    organizationDisplayName: 'Expo',
    theme: {
      colorMode: {
        forcedColorMode: colorMode,
        enableSystem: isAutoColorMode,
      },
      primaryColors: {
        textColorOnPrimary: '#ffffff',
      },
    },
  };

  const modalSettings: InkeepModalSettings = {};

  const searchSettings: InkeepSearchSettings = {};

  const aiChatSettings: InkeepAIChatSettings = {
    chatSubjectName: 'Expo',
    botAvatarSrcUrl: 'https://docs.expo.dev/static/images/favicon.ico',
    getHelpCallToActions: [
      {
        name: 'Discord',
        url: 'https://discord.com/invite/expo',
        icon: {
          builtIn: 'FaDiscord',
        },
      },
      {
        name: 'Support',
        url: 'https://expo.dev/support',
        icon: {
          builtIn: 'IoHelpBuoyOutline',
        },
      },
    ],
    quickQuestions: [
      'Are Expo apps fast on all platforms?',
      'How do I set up live reload?',
      'Can I update my mobile apps without an app store release?',
    ],
  };

  return { baseSettings, aiChatSettings, searchSettings, modalSettings };
};

export default useInkeepSettings;
