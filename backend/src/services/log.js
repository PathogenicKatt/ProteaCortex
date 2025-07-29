// Basic anomaly detection
function processLog(log) {
  const failedLogins = logs.filter(l => 
    l.source_ip === log.source_ip && 
    l.message.includes('Failed password')
  );
  
  if (failedLogins.length > 5) {
    console.warn(`Brute force detected from ${log.source_ip}`);
  }
}

module.exports = { processLog };