---
name: Ruby toolchain behavior
description: A Replit Ruby module side effect that can make installed Jekyll plugins seem missing.
---

Installing the Ruby toolchain can automatically create an empty Gemfile. Bundler
then restricts available dependencies to that file, even when gems have already
been installed successfully.

**Why:** This environment reported installed Jekyll SEO gems as missing after
the Ruby runtime created its default Gemfile.

**How to apply:** After provisioning Ruby, inspect the existing Gemfile before
adding or troubleshooting dependencies. Do not assume successful global gem
installation makes those gems available inside a Bundler-managed build.