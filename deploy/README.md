# VPS deployment

The Altera site runs as an Astro Node server behind Nginx. The production
domain stays on the existing WordPress site until the new version is tested.

## Staging host

Create this DNS record in Zone before enabling the preview server:

```text
Host: preview
Type: A
Destination: 185.31.243.151
```

The Nginx template is `nginx/altera-preview.conf`. After DNS resolves, issue a
certificate for `preview.altera.ee` with Certbot.

## Runtime

- Site directory: `/var/www/altera-site`
- Service: `altera-site.service`
- Local Node port: `127.0.0.1:4322`
- Secret environment file: `/etc/altera-site.env`

The environment file must be created on the VPS and must never be committed to
GitHub. It contains the Zone SMTP application password and Telegram bot token.
