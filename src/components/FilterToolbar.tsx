import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DealStatus } from '@/types/deals';

interface FilterToolbarProps {
  onFiltersChange: (filters: {
    status?: DealStatus;
    owner?: string;
    minValue?: number;
    maxValue?: number;
  }) => void;
  availableStatuses: DealStatus[];
  availableOwners: string[];
}

export function FilterToolbar({ onFiltersChange, availableStatuses, availableOwners }: FilterToolbarProps) {
  const [status, setStatus] = useState<string>('all');
  const [owner, setOwner] = useState<string>('all');
  const [minValue, setMinValue] = useState<string>('');
  const [maxValue, setMaxValue] = useState<string>('');

  const applyFilters = () => {
    const filters: any = {};
    if (status !== 'all') filters.status = status as DealStatus;
    if (owner !== 'all') filters.owner = owner;
    if (minValue) filters.minValue = parseFloat(minValue);
    if (maxValue) filters.maxValue = parseFloat(maxValue);
    
    onFiltersChange(filters);
  };

  const clearFilters = () => {
    setStatus('all');
    setOwner('all');
    setMinValue('');
    setMaxValue('');
    onFiltersChange({});
  };

  const hasFilters = status !== 'all' || owner !== 'all' || minValue || maxValue;
  const filterCount = [
    status !== 'all' ? status : null, 
    owner !== 'all' ? owner : null, 
    minValue, 
    maxValue
  ].filter(Boolean).length;

  return (
    <div className="flex items-center gap-3 p-3 bg-muted/20 border-b">
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">Filters:</span>
      </div>

      <Select value={status} onValueChange={setStatus}>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          {availableStatuses.map((s) => (
            <SelectItem key={s} value={s}>{s}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={owner} onValueChange={setOwner}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Owner" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Owners</SelectItem>
          {availableOwners.map((o) => (
            <SelectItem key={o} value={o}>{o}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex items-center gap-2">
        <Input
          type="number"
          placeholder="Min $"
          value={minValue}
          onChange={(e) => setMinValue(e.target.value)}
          className="w-20 text-sm"
        />
        <span className="text-muted-foreground">-</span>
        <Input
          type="number"
          placeholder="Max $"
          value={maxValue}
          onChange={(e) => setMaxValue(e.target.value)}
          className="w-20 text-sm"
        />
      </div>

      <Button onClick={applyFilters} size="sm" variant="default">
        Apply
      </Button>

      {hasFilters && (
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {filterCount} active
          </Badge>
          <Button onClick={clearFilters} size="sm" variant="ghost">
            <X className="h-3 w-3 mr-1" />
            Clear
          </Button>
        </div>
      )}
    </div>
  );
}