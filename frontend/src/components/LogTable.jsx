export default function LogTable({ logs }) {
  return (
    <div style={{ fontFamily: 'monospace' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: '1rem' }}>
        <div><strong>Timestamp</strong></div>
        <div><strong>Source IP</strong></div>
        <div><strong>Message</strong></div>
        
        {logs.map(log => (
          <>
            <div>{new Date(log.timestamp).toLocaleTimeString()}</div>
            <div>{log.source_ip}</div>
            <div style={{ color: log.message.includes('Failed') ? 'red' : 'inherit' }}>
              {log.message}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}