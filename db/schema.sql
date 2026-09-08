-- Run once against the Neon database (Neon console SQL editor, or psql).
CREATE TABLE pageviews (
  id         BIGSERIAL PRIMARY KEY,
  path       TEXT NOT NULL,
  sector     TEXT NOT NULL, -- 'sector-tecnico' | 'sector-grafico' | 'sector-estudio' | 'otros'
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_pageviews_created_at ON pageviews (created_at);
CREATE INDEX idx_pageviews_sector      ON pageviews (sector, created_at);
