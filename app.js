const logger = require('./helloworld.js'); //외부 파일에서 값 가져오기

logger.showLogMessage('테스트 중...');
logger.secondLog('이것도 테스트 중입니다.');    
console.log(`사용자의 키 값 : ${logger.keyValue}`);