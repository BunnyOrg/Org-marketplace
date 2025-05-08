export async function fetchMarketplaceItems() {
  // Simulate reading from a repo containing workflows and actions
  return [
    {
      name: 'CI Workflow',
      description: 'A workflow for continuous integration.',
      category: 'workflow',
    },
    {
      name: 'Docker Build Action',
      description: 'GitHub Action to build Docker images.',
      category: 'action',
    },
  ];
}
