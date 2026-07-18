export const profile = {
  name: "Admin User",
  email: "admin@secureauth.com",
  role: "Super Administrator",
  avatar: "AU",
};

export const organization = {
  name: "SecureAuth Technologies",
  domain: "secureauth.com",
  timezone: "Asia/Kolkata",
  region: "India",
};

export const securitySettings = [
  {
    id: 1,
    title: "Adaptive Authentication",
    description: "Enable risk-based authentication for all applications.",
    enabled: true,
  },
  {
    id: 2,
    title: "Require Multi-Factor Authentication",
    description: "Force MFA for medium and high-risk logins.",
    enabled: true,
  },
  {
    id: 3,
    title: "Trusted Devices",
    description: "Allow trusted devices to skip MFA when appropriate.",
    enabled: true,
  },
  {
    id: 4,
    title: "Geo Restrictions",
    description: "Block authentication from restricted countries.",
    enabled: false,
  },
];

export const notifications = [
  {
    id: 1,
    title: "Email Notifications",
    enabled: true,
  },
  {
    id: 2,
    title: "Failed Login Alerts",
    enabled: true,
  },
  {
    id: 3,
    title: "Weekly Security Reports",
    enabled: true,
  },
  {
    id: 4,
    title: "AI Security Recommendations",
    enabled: true,
  },
];

export const sessionSettings = {
  sessionTimeout: "30 Minutes",
  idleTimeout: "15 Minutes",
  rememberDevice: true,
  concurrentSessions: 3,
};

export const dangerActions = [
  {
    id: 1,
    title: "Logout All Users",
    description: "Terminate every active session immediately.",
  },
  {
    id: 2,
    title: "Revoke API Keys",
    description: "Invalidate all issued API keys.",
  },
  {
    id: 3,
    title: "Delete Organization",
    description: "Permanently delete this organization and all associated data.",
  },
];