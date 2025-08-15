import { useState, useEffect } from 'react';
import { DealsTable } from '@/components/DealsTable';
import { mockDeals, defaultColumns } from '@/data/mockDeals';
import { ColumnConfig } from '@/types/deals';

const Index = () => {
  const [columns, setColumns] = useState<ColumnConfig[]>(defaultColumns);

  useEffect(() => {
    const savedColumns = localStorage.getItem('deals-columns');
    if (savedColumns) {
      try {
        setColumns(JSON.parse(savedColumns));
      } catch (error) {
        console.error('Failed to load saved columns:', error);
      }
    }
  }, []);

  const handleColumnsChange = (newColumns: ColumnConfig[]) => {
    setColumns(newColumns);
    localStorage.setItem('deals-columns', JSON.stringify(newColumns));
  };

  return (
    <div className="h-screen bg-background">
      <DealsTable 
        deals={mockDeals}
        columns={columns}
        onColumnsChange={handleColumnsChange}
      />
    </div>
  );
};

export default Index;
