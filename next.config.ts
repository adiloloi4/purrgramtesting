import type { NextConfig } from "next";

// #region agent log
fetch('http://127.0.0.1:7242/ingest/05aa6625-d13e-4e7d-b98c-38b24e10b904',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'next.config.ts:1',message:'Config loaded',data:{},timestamp:Date.now(),sessionId:'debug-session'})}).catch(()=>{});
// #endregion

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
