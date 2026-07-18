export const kpiData = [
  {
    id: 1,
    title: "Total Logins",
    value: "12,847",
    change: "+12.8%",
    trend: "up",
    color: "blue",
  },
  {
    id: 2,
    title: "Successful Logins",
    value: "12,126",
    change: "+10.4%",
    trend: "up",
    color: "green",
  },
  {
    id: 3,
    title: "Failed Logins",
    value: "721",
    change: "-8.2%",
    trend: "down",
    color: "red",
  },
  {
    id: 4,
    title: "Average Risk Score",
    value: "34",
    change: "-4.1%",
    trend: "down",
    color: "purple",
  },
];

export const loginTrendData = [
  { day: "Mon", success: 1520, failed: 82 },
  { day: "Tue", success: 1690, failed: 94 },
  { day: "Wed", success: 1810, failed: 110 },
  { day: "Thu", success: 1980, failed: 121 },
  { day: "Fri", success: 2120, failed: 96 },
  { day: "Sat", success: 1740, failed: 72 },
  { day: "Sun", success: 1266, failed: 58 },
];

export const riskDistribution = [
  { name: "Low Risk", value: 74 },
  { name: "Medium Risk", value: 19 },
  { name: "High Risk", value: 7 },
];

export const deviceAnalytics = [
  { name: "Windows", value: 46 },
  { name: "macOS", value: 22 },
  { name: "Linux", value: 9 },
  { name: "Android", value: 15 },
  { name: "iPhone", value: 8 },
];

export const geoLoginData = [
  {
    country: "India",
    city: "Bengaluru",
    logins: 4320,
    risk: 18,
  },
  {
    country: "India",
    city: "Hyderabad",
    logins: 3184,
    risk: 27,
  },
  {
    country: "United States",
    city: "New York",
    logins: 2011,
    risk: 32,
  },
  {
    country: "Germany",
    city: "Berlin",
    logins: 812,
    risk: 41,
  },
  {
    country: "Russia",
    city: "Moscow",
    logins: 243,
    risk: 91,
  },
];

export const securityAlerts = [
  {
    id: 1,
    title: "Impossible Travel Detected",
    severity: "Critical",
    time: "2 mins ago",
  },
  {
    id: 2,
    title: "Suspicious Device Login",
    severity: "High",
    time: "8 mins ago",
  },
  {
    id: 3,
    title: "Multiple Failed Login Attempts",
    severity: "Medium",
    time: "16 mins ago",
  },
  {
    id: 4,
    title: "VPN Login Detected",
    severity: "Low",
    time: "28 mins ago",
  },
];

export const aiInsights = [
  {
    id: 1,
    title: "High MFA Trigger Rate",
    description:
      "Users signing in from new devices are 47% more likely to trigger MFA verification.",
  },
  {
    id: 2,
    title: "Peak Risk Window",
    description:
      "Most high-risk login attempts occur between 1:00 AM and 4:00 AM UTC.",
  },
  {
    id: 3,
    title: "Geo Anomaly",
    description:
      "Login attempts originating from high-risk regions increased by 12% this week.",
  },
];