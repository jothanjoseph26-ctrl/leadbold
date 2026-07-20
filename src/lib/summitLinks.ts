type SummitLinkTarget = {
  id: string;
  url?: string;
};

export const getSummitRegistrationUrl = (summit: SummitLinkTarget) => {
  const env = (import.meta as ImportMeta & { env?: Record<string, string> }).env;
  const defaultRegistrationUrl = env?.VITE_AOGLS_REGISTRATION_URL || 'https://summit.leadboldconsulting.co.uk/register';

  if (summit.id === 'aogls-2026') {
    return defaultRegistrationUrl;
  }

  return summit.url || defaultRegistrationUrl;
};
