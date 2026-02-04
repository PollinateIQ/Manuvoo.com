import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import { CAL_USERNAME, CAL_EVENT_TYPE, CAL_DOMAIN } from '@/config/booking';

interface CalButtonProps {
  children: React.ReactNode;
  className?: string;
  eventType?: string; // Optional: override the default event type
}

export function CalButton({ children, className, eventType }: CalButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ 
        embedJsUrl: `https://${CAL_DOMAIN}/embed/embed.js`
      });
      cal('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#f97316' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const cal = await getCalApi({ 
      embedJsUrl: `https://${CAL_DOMAIN}/embed/embed.js` 
    });
    const eventSlug = eventType || CAL_EVENT_TYPE;
    cal('modal', {
      calLink: `${CAL_USERNAME}/${eventSlug}`,
      calOrigin: `https://${CAL_DOMAIN}`,
      config: {
        theme: 'dark',
      },
    });
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
}
