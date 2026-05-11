"use client";

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ChatWidgetClient() {
  const pathname = usePathname();

  useEffect(() => {
    const updateWidgetVisibility = () => {
      const widget = document.querySelector('chat-widget') as HTMLElement;
      if (widget) {
        if (pathname === '/') {
          widget.style.setProperty('display', '', 'important');
          widget.style.setProperty('visibility', 'visible', 'important');
        } else {
          widget.style.setProperty('display', 'none', 'important');
        }
      }
    };

    // Run immediately
    updateWidgetVisibility();
    
    // Watch for the widget being added to the DOM
    const observer = new MutationObserver(() => {
      updateWidgetVisibility();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <Script 
      src="https://widgets.leadconnectorhq.com/loader.js" 
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
      data-widget-id="6a023c30d31db45000223539" 
      data-source="WEB_USER"
      strategy="afterInteractive"
    />
  );
}
