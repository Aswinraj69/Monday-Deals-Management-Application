import { DealStatus } from '@/types/deals';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: DealStatus;
  className?: string;
}

const statusConfig = {
  new: {
    label: 'New',
    className: 'bg-status-new/10 text-status-new border-status-new/20'
  },
  qualified: {
    label: 'Qualified',
    className: 'bg-status-qualified/10 text-status-qualified border-status-qualified/20'
  },
  proposal: {
    label: 'Proposal',
    className: 'bg-status-proposal/10 text-status-proposal border-status-proposal/20'
  },
  won: {
    label: 'Won',
    className: 'bg-status-won/10 text-status-won border-status-won/20'
  },
  lost: {
    label: 'Lost',
    className: 'bg-status-lost/10 text-status-lost border-status-lost/20'
  }
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}