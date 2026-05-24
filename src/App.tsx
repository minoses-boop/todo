import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { TodoFilter } from './components/TodoFilter';

export default function App() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    toggleAll,
    activeCount,
    completedCount,
    totalCount,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-100 flex flex-col items-center pt-16 px-4 pb-16">
      <h1 className="text-5xl font-thin text-indigo-400 tracking-[0.3em] mb-8 uppercase">
        todos
      </h1>

      <div className="w-full max-w-md shadow-xl rounded-xl overflow-hidden">
        {/* Input row */}
        <div className="bg-white">
          <TodoInput
            onAdd={addTodo}
            onToggleAll={totalCount > 0 ? toggleAll : undefined}
            allCompleted={totalCount > 0 && activeCount === 0}
          />
        </div>

        {/* List */}
        <div className="bg-white divide-y divide-gray-100">
          {todos.length === 0 ? (
            <div className="py-16 text-center text-gray-400 text-sm select-none">
              {filter === 'all'
                ? '할 일을 추가해보세요!'
                : filter === 'active'
                ? '미완료 항목이 없습니다.'
                : '완료된 항목이 없습니다.'}
            </div>
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))
          )}
        </div>

        {/* Footer */}
        {totalCount > 0 && (
          <div className="bg-gray-50 border-t border-gray-200 px-4 py-2 flex items-center justify-between flex-wrap gap-y-1 text-xs text-gray-500">
            <span className="w-20">
              {activeCount}개 남음
            </span>
            <TodoFilter filter={filter} onFilterChange={setFilter} />
            <div className="w-20 text-right">
              {completedCount > 0 && (
                <button
                  onClick={clearCompleted}
                  className="hover:text-red-500 transition-colors"
                >
                  완료 삭제
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {totalCount > 0 && (
        <p className="mt-4 text-xs text-gray-400 text-center">
          더블클릭으로 수정 · Enter로 저장 · Esc로 취소
        </p>
      )}
    </div>
  );
}
