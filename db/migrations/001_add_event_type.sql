-- Run once against the existing Neon database (SQL editor or psql) to
-- upgrade a pageviews table created before event tracking existed.
ALTER TABLE pageviews ADD COLUMN event_type TEXT NOT NULL DEFAULT 'pageview';

CREATE INDEX idx_pageviews_event_sector ON pageviews (event_type, sector);
