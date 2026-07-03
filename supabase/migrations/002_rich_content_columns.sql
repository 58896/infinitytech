-- =========================================================
-- Migration 002: Rich content columns
-- Adds missing columns so products + articles match the full TypeScript types
-- Run this in Supabase SQL Editor AFTER 001_initial_schema.sql
-- =========================================================

-- Products: fields needed for the full Product TypeScript type
ALTER TABLE public.products
  ADD COLUMN IF NOT EXISTS accent_grad           text    NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS badge_icon            text    NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS title_grad_ar         text    NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS title_grad_en         text    NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS title_plain_ar        text    NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS title_plain_en        text    NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS grad_first            boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS overview_content_first boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS overview_label_ar     text    NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS overview_label_en     text    NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS overview_title_ar     text    NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS overview_title_en     text    NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS overview_desc_ar      text    NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS overview_desc_en      text    NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS overview_special_right text,
  ADD COLUMN IF NOT EXISTS sections_data         jsonb   NOT NULL DEFAULT '[]',
  ADD COLUMN IF NOT EXISTS cta_title_ar          text    NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS cta_title_en          text    NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS cta_desc_ar           text    NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS cta_desc_en           text    NOT NULL DEFAULT '';

-- Articles: fields needed for the full Article TypeScript type
ALTER TABLE public.articles
  ADD COLUMN IF NOT EXISTS accent_color     text  NOT NULL DEFAULT '#7b2ff7',
  ADD COLUMN IF NOT EXISTS accent_grad      text  NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS badge_icon       text  NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS date_ar          text  NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS date_en          text  NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS body_blocks      jsonb NOT NULL DEFAULT '[]',
  ADD COLUMN IF NOT EXISTS related_articles jsonb NOT NULL DEFAULT '[]',
  ADD COLUMN IF NOT EXISTS article_cta      jsonb;
