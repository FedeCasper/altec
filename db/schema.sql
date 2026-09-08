-- Run once against the Neon database (Neon console SQL editor, or psql).
-- For a database created before event tracking existed, run
-- db/migrations/001_add_event_type.sql instead.
CREATE TABLE pageviews (
  id         BIGSERIAL PRIMARY KEY,
  path       TEXT NOT NULL,
  sector     TEXT NOT NULL, -- 'sector-tecnico' | 'sector-grafico' | 'sector-estudio' | 'otros'
  event_type TEXT NOT NULL DEFAULT 'pageview', -- 'pageview' | 'whatsapp_click'
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_pageviews_created_at ON pageviews (created_at);
CREATE INDEX idx_pageviews_sector      ON pageviews (sector, created_at);
CREATE INDEX idx_pageviews_event_sector ON pageviews (event_type, sector);
