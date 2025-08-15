import { Deal, Activity } from '@/types/deals';

const activities: Activity[] = [
  {
    id: '1',
    type: 'call',
    description: 'Initial discovery call',
    date: '2024-01-15',
    user: 'Sarah Chen'
  },
  {
    id: '2',
    type: 'email',
    description: 'Sent pricing proposal',
    date: '2024-01-18',
    user: 'Mike Rodriguez'
  },
  {
    id: '3',
    type: 'meeting',
    description: 'Product demonstration',
    date: '2024-01-20',
    user: 'Sarah Chen'
  }
];

export const mockDeals: Deal[] = [
  {
    id: '1',
    dealName: 'Enterprise Software License',
    company: 'TechCorp Inc.',
    owner: 'Sarah Chen',
    status: 'qualified',
    value: 125000,
    expectedCloseDate: '2024-03-15',
    probability: 75,
    lastActivity: '2024-01-20',
    source: 'Website',
    notes: 'Strong interest in our enterprise package',
    activities: activities.slice(0, 2)
  },
  {
    id: '2',
    dealName: 'Cloud Migration Project',
    company: 'DataFlow Systems',
    owner: 'Mike Rodriguez',
    status: 'proposal',
    value: 89000,
    expectedCloseDate: '2024-02-28',
    probability: 60,
    lastActivity: '2024-01-19',
    source: 'Referral',
    activities: [activities[1]]
  },
  {
    id: '3',
    dealName: 'Annual Support Contract',
    company: 'InnovateCo',
    owner: 'Jessica Park',
    status: 'won',
    value: 45000,
    expectedCloseDate: '2024-01-31',
    probability: 100,
    lastActivity: '2024-01-18',
    source: 'Cold Call',
    activities: activities
  },
  {
    id: '4',
    dealName: 'Startup Package',
    company: 'QuickStart Ltd',
    owner: 'David Kim',
    status: 'new',
    value: 12500,
    expectedCloseDate: '2024-04-30',
    probability: 25,
    lastActivity: '2024-01-17',
    source: 'LinkedIn',
    activities: [activities[0]]
  },
  {
    id: '5',
    dealName: 'Custom Integration',
    company: 'MegaCorp Industries',
    owner: 'Sarah Chen',
    status: 'qualified',
    value: 200000,
    expectedCloseDate: '2024-05-15',
    probability: 80,
    lastActivity: '2024-01-21',
    source: 'Trade Show',
    activities: activities.slice(1)
  },
  {
    id: '6',
    dealName: 'Small Business Suite',
    company: 'Local Retail Co',
    owner: 'Mike Rodriguez',
    status: 'lost',
    value: 8500,
    expectedCloseDate: '2024-01-15',
    probability: 0,
    lastActivity: '2024-01-10',
    source: 'Google Ads',
    activities: [activities[2]]
  },
  {
    id: '7',
    dealName: 'Multi-Year Agreement',
    company: 'Global Enterprises',
    owner: 'Jessica Park',
    status: 'proposal',
    value: 350000,
    expectedCloseDate: '2024-06-30',
    probability: 70,
    lastActivity: '2024-01-22',
    source: 'Existing Customer',
    activities: activities
  },
  {
    id: '8',
    dealName: 'API Integration',
    company: 'DevTools Inc',
    owner: 'David Kim',
    status: 'new',
    value: 25000,
    expectedCloseDate: '2024-03-01',
    probability: 30,
    lastActivity: '2024-01-16',
    source: 'Partner Referral',
    activities: [activities[0], activities[2]]
  }
];

export const defaultColumns = [
  { key: 'dealName' as const, title: 'Deal Name', width: 200, visible: true, sortable: true, resizable: true },
  { key: 'company' as const, title: 'Company', width: 150, visible: true, sortable: true, resizable: true },
  { key: 'owner' as const, title: 'Owner', width: 120, visible: true, sortable: true, resizable: true },
  { key: 'status' as const, title: 'Status', width: 100, visible: true, sortable: true, resizable: true },
  { key: 'value' as const, title: 'Value', width: 120, visible: true, sortable: true, resizable: true },
  { key: 'probability' as const, title: 'Probability', width: 100, visible: true, sortable: true, resizable: true },
  { key: 'expectedCloseDate' as const, title: 'Close Date', width: 120, visible: true, sortable: true, resizable: true },
  { key: 'lastActivity' as const, title: 'Last Activity', width: 120, visible: true, sortable: true, resizable: true },
  { key: 'source' as const, title: 'Source', width: 120, visible: true, sortable: true, resizable: true }
];