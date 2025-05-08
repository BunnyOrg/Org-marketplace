# Deploy Template

**Description:** Deploys application to specified environment.

**Inputs:**
- `environment`: Target environment (dev/stage/prod)

**Secrets:**
- `DEPLOY_TOKEN`

**Example Usage:**
```yaml
jobs:
  deploy:
    uses: org-org/org-actions-marketplace/.github/workflows/deploy-template.yml@main
    with:
      environment: production
    secrets:
      DEPLOY_TOKEN: ${{ secrets.DEPLOY_TOKEN }}
