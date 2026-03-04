CREATE TABLE projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    status_badge TEXT DEFAULT 'SPIRAL', -- SPIRAL, MVP, etc.
    card_icon TEXT DEFAULT 'fa-lightbulb', -- Clase de FontAwesome
    icon_color TEXT DEFAULT '#f1c40f',
    
    -- Contenido Bilingüe
    description_es TEXT,
    description_en TEXT,
    location_es TEXT, -- Ejemplo: "Bernardperulabs (En desarrollo 2026)"
    location_en TEXT,
    
    -- Datos Técnicos
    tech_stack TEXT[], -- ['PIC/C', 'KiCad 8.0', 'FreeCAD']
    progress_percent INTEGER DEFAULT 0,
    progress_color TEXT DEFAULT 'var(--prog-forest)',
    
    -- Links y Checklist
    repo_url TEXT,
    -- Usaremos JSONB para la lista de tareas: [{"text_es": "...", "text_en": "...", "date": "Feb 26", "done": true}]
    checklist JSONB DEFAULT '[]'::jsonb,
    
    created_at TIMESTAMPTZ DEFAULT NOW()
);