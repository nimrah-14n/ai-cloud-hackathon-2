# Environment Configuration Guide

## Required Variables
- DATABASE_URL
- AUTH_SECRET
- API_BASE_URL
- NODE_ENV

## Rules
- Never commit `.env` files
- Validate variables at startup
- Use different configs for dev and prod

## Professional Insight
Environment misconfiguration is the #1 cause of production failure.