import type { FilterType } from '../types';

interface Props {
  filter: FilterType;
  onFilterChange: (f: FilterType) => void;
}

const OPTIONS: { value: FilterType; label: string }[] = [
  { value: 'all', label: '전체' },
  { value: 'active', label: '미완료' },
  { value: 'completed', label: '완료' },
];

export function TodoFilter({ filter, onFilterChange }: Props) {
  return (
    <div className="flex gap-1">
      {OPTIONS.map(o => (
        <button
          key={o.value}
          onClick={() => onFilterChange(o.value)}
          className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors duration-100 ${
            filter === o.value
              ? 'bg-indigo-100 text-indigo-700'
              : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
