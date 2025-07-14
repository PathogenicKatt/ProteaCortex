import React from 'react';

export default function LogTable({ logs }) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Timestamp</th>
          <th className="py-2 px-4 border-b">Event</th>
          <th className="py-2 px-4 border-b">Severity</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b">{log.timestamp}</td>
            <td className="py-2 px-4 border-b">{log.event}</td>
            <td className={`py-2 px-4 border-b ${log.severity === 'High' ? 'text-red-500' : 'text-yellow-500'}`}>
              {log.severity}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}