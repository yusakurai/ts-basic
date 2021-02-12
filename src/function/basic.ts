// 呼び出しシグネチャ（省略記法）
type LogMessage = (message: string) => void;
export const logMessage1: LogMessage = (message) => {
  console.log('Function basic sample 1:', message);
};

// 完全な呼び出しシグネチャ
type FullLogMessage = {
  (message: string): void;
};
export const logMessage2: FullLogMessage = (message) => {
  console.log('Function basic sample 2:', message);
};
