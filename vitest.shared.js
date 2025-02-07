import { defineProject, mergeConfig } from 'vitest/config';
export const browserConfig = defineProject({
    test: {
      globals: true,
      exclude: ['**/*e2e.spec.ts'],      
      coverage: {        
        exclude: ['examples/**'],
        reporter: ['json'],
      },
      environment: 'jsdom',
    },
  });
  
  export const nodeConfig = defineProject({
    test: {
      globals: true,
      exclude: ['**/*e2e.spec.ts'],            
      coverage: {
        //TODO: the exclude is not working, therefore the coverage result are not correct.
        exclude: ['examples/**'],
        reporter: ['json'],
      },
      environment: 'node',
    },
  });
  
  export const allEnvs = mergeConfig(browserConfig, nodeConfig);