export const pushToDataLayer = (event: string, params?: object) => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event,
      ...params,
      timestamp: new Date().toISOString(),
    });
    console.log(`✅ GA4 Event: ${event}`, params);
  }
};