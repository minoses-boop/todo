import { useState, type KeyboardEvent } from 'react';

interface Props {
  onAdd: (title: string) => void;
  onToggleAll?: () => void;
  allCompleted?: boolean;
}

export function TodoInput({ onAdd, onToggleAll, allCompleted }: Props) {
  const [value, setValue] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim()) {
      onAdd(value);
      setValue('');
    }
  };

  return (
    <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
      {onToggleAll && (
        <button
          onClick={onToggleAll}
          title="모두 완료 토글"
          className={`flex-shrink-0 transition-colors duration-150 ${
            allCompleted ? 'text-indigo-500' : 'text-gray-300 hover:text-gray-400'
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="할 일을 입력하세요..."
        className="flex-1 py-1 text-gray-700 placeholder-gray-300 bg-transparent outline-none text-base italic"
        autoFocus
      />
      {value.trim() && (
        <button
          onClick={() => { onAdd(value); setValue(''); }}
          className="flex-shrink-0 px-3 py-1 bg-indigo-500 text-white rounded-lg text-sm font-medium hover:bg-indigo-600 active:bg-indigo-700 transition-colors"
        >
          추가
        </button>
      )}
    </div>
  );
}
