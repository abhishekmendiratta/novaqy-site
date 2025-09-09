module.exports = {
  ci: {
    collect: {
      // Run against local preview server started by LHCI via startServerCommand
      startServerCommand: 'cd web && npm run preview -- --port 4321',
      startServerReadyPattern: 'Local:',
      url: ['http://localhost:4321'],
      numberOfRuns: 1,
      disableStorageReset: true
    },
    assert: {
      // Enforce Lighthouse accessibility score of 100% (1.0)
      assertions: {
        'categories:accessibility': ['error', { minScore: 1 }]
      }
    },
    upload: {
      // Temporary public storage for CI artifacts (use appropriate uploader in CI)
      target: 'temporary-public-storage'
    }
  }
};
