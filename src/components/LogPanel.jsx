import { logger } from '../utils/logger';

export default function LogPanel() {
  return (
    <div className="p-4 bg-gray-100 border rounded-lg max-h-60 overflow-y-auto text-sm font-mono mt-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-gray-700">Live Logs</span>
        <button
          onClick={() => logger.clear()}
          className="text-red-500 text-xs hover:underline"
        >
          Clear
        </button>
      </div>
      <ul>
        {logger.logs.slice().reverse().map((log, idx) => (
          <li key={idx} className={`text-${log.level === 'error' ? 'red' : log.level === 'warn' ? 'yellow' : 'gray'}-700`}>
            [{log.timestamp}] [{log.level.toUpperCase()}] {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
