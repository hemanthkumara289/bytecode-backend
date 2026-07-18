export const demoUsers = {
  "admin@secureauth.com": {
    password: "Admin@123",
    risk: "LOW",
    score: 18,
    location: "Bengaluru, India",
    device: "Windows 11 • Chrome",
    message: "Trusted device detected.",
  },

  "manager@secureauth.com": {
    password: "Manager@123",
    risk: "MEDIUM",
    score: 56,
    location: "Hyderabad, India",
    device: "MacBook Pro • Safari",
    message: "New device detected. MFA required.",
  },

  "hacker@evil.com": {
    password: "Hack@123",
    risk: "HIGH",
    score: 92,
    location: "Moscow, Russia",
    device: "Linux • Firefox",
    message: "Impossible travel and suspicious IP detected.",
  },
};

export const securityChecks = [
  "Verifying credentials",
  "Checking device reputation",
  "Analyzing IP intelligence",
  "Evaluating user behaviour",
  "Validating geo-location",
  "Scanning threat intelligence",
  "Calculating adaptive risk score",
];

export const securityTips = [
  "Enable Multi-Factor Authentication",
  "Use a strong password",
  "Never share your OTP",
  "Review login activity regularly",
  "Use only trusted devices",
];

export const mfaCode = "123456";