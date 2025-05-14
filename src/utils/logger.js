const logs = [];

function log(level, ...args) {
  const entry = { level, message: args.join(' '), timestamp: new Date().toISOString() };
  logs.push(entry);
  if (import.meta.env.DEV || level !== 'debug') {
    console[level === 'debug' ? 'log' : level](`[${level.toUpperCase()}]`, ...args);
  }
}

export const logger = {
  logs,
  info: (...args) => log('[INFO]', ...args),
  warn: (...args) => log('[WARN]', ...args),
  error: (...args) => log('[ERROR]', ...args),
  debug: (...args) => log('[DEBUG]', ...args),
  clear: () => logs.length = 0
};
