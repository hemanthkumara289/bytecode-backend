export const apiKeys = [
  {
    id: 1,
    name: "Production API",
    key: "sk_live_************************A92K",
    created: "15 Jul 2026",
    lastUsed: "18 Jul 2026 • 10:42 AM",
    expires: "15 Jul 2027",
    status: "Active",
  },
  {
    id: 2,
    name: "Development API",
    key: "sk_test_************************7QXM",
    created: "10 Jul 2026",
    lastUsed: "17 Jul 2026 • 09:12 PM",
    expires: "10 Jul 2027",
    status: "Active",
  },
  {
    id: 3,
    name: "Legacy API",
    key: "sk_live_************************P41Z",
    created: "01 Jan 2026",
    lastUsed: "21 Jun 2026",
    expires: "Expired",
    status: "Revoked",
  },
];

export const oauthClients = [
  {
    id: 1,
    name: "SecureAuth Dashboard",
    clientId: "client_dashboard_12345",
    clientSecret: "****************************",
    redirectUri: "https://dashboard.secureauth.com/callback",
    scopes: ["openid", "profile", "email"],
    status: "Active",
  },
  {
    id: 2,
    name: "Mobile App",
    clientId: "client_mobile_98765",
    clientSecret: "****************************",
    redirectUri: "secureauth://callback",
    scopes: ["openid", "profile"],
    status: "Active",
  },
];

export const usageAnalytics = {
  totalRequests: "2.4M",
  successRate: "99.92%",
  failedRequests: "1,846",
  activeClients: 14,
};