# Redirect default Netlify subdomain to primary domain
http://haleyhankinsweb.netlify.com/* http://www.haleyhankinsweb.com/:splat 301!
