export const roles = [
  {
    id: 1,
    name: "Super Admin",
    users: 2,
    permissions: 32,
    status: "Active",
    description: "Full administrative access to the SecureAuth platform.",
  },
  {
    id: 2,
    name: "Organization Admin",
    users: 5,
    permissions: 26,
    status: "Active",
    description: "Manages applications, users, and organization settings.",
  },
  {
    id: 3,
    name: "Security Manager",
    users: 4,
    permissions: 21,
    status: "Active",
    description: "Responsible for security policies and audit monitoring.",
  },
  {
    id: 4,
    name: "Developer",
    users: 12,
    permissions: 12,
    status: "Active",
    description: "Access to applications, API keys, and integrations.",
  },
  {
    id: 5,
    name: "Auditor",
    users: 3,
    permissions: 8,
    status: "Active",
    description: "Read-only access to logs and analytics.",
  },
];

export const permissions = [
  "Dashboard",
  "Applications",
  "Users",
  "Policies",
  "Simulation",
  "Audit Logs",
  "Analytics",
  "API Keys",
  "Roles",
  "Settings",
];

export const assignedUsers = [
  {
    id: 1,
    name: "John Anderson",
    email: "john@secureauth.com",
    role: "Super Admin",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah@secureauth.com",
    role: "Organization Admin",
  },
  {
    id: 3,
    name: "David Miller",
    email: "david@secureauth.com",
    role: "Developer",
  },
];

export const roleStats = {
  totalRoles: 5,
  activeUsers: 26,
  customRoles: 2,
  permissionCoverage: "100%",
};