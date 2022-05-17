import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let commentDetails = [
      {
        
      }
    ];
    let userDetails = [
      {}
      
    ];
   
    return { comment: commentDetails,users:userDetails };

  
    
  }
} 