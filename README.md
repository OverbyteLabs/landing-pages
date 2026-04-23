# landing-pages

Landing pages for Overbytelabs ideas. Each folder inside `ideas/` is a self-contained static site deployed to its own subdomain.

## Structure

```
ideas/
  my-idea/          →  my-idea.overbytelabs.com
  another-thing/    →  another-thing.overbytelabs.com
  example/          →  example.overbytelabs.com
```

## Add a new idea

1. Create a folder under `ideas/your-idea-name/`
2. Add `index.html` (and any assets) to that folder
3. Go to **Actions → Deploy Landing Page → Run workflow**
4. Enter the folder name as the idea, optionally override the subdomain

## Deploy

1. GitHub → **Actions** tab
2. Select **Deploy Landing Page**
3. Click **Run workflow**
4. Fill in:
   - `idea` — folder name (e.g. `my-idea`)
   - `subdomain` — optional override (defaults to folder name)
5. The workflow will:
   - Create the subdomain on Hostinger if it doesn't exist
   - Set the DNS CNAME automatically
   - rsync your files to `~/domains/<subdomain>.overbytelabs.com/public_html/`

## Required secrets (set once)

| Secret | Description |
|--------|-------------|
| `HOSTINGER_TOKEN` | Hostinger API bearer token (from hPanel → Profile → API) |
| `DEPLOY_SSH_KEY` | Base64-encoded SSH private key registered in hPanel → SSH Keys |

### Add your SSH key to Hostinger

1. Generate a key: `ssh-keygen -t ed25519 -C "github-actions"`
2. Add the **public key** in Hostinger hPanel → Hosting → SSH Access
3. Base64-encode the private key and save as the `DEPLOY_SSH_KEY` secret:

```powershell
# PowerShell
[Convert]::ToBase64String([IO.File]::ReadAllBytes("$HOME\.ssh\id_ed25519")) | gh secret set DEPLOY_SSH_KEY --repo Overbytelabs/landing-pages
```

```bash
# bash/macOS
base64 -w0 ~/.ssh/id_ed25519 | gh secret set DEPLOY_SSH_KEY --repo Overbytelabs/landing-pages
```
