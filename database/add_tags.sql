ALTER TABLE public.projects
ADD COLUMN tags TEXT[] DEFAULT '{}';

UPDATE public.projects SET tags = ARRAY['Hardware', 'Firmware'] WHERE title = 'DomoNode';
UPDATE public.projects SET tags = ARRAY['Hardware', 'Firmware', 'Cloud'] WHERE title = 'Edge Computing Agroambiental';
UPDATE public.projects SET tags = ARRAY['Hardware', 'Firmware'] WHERE title = 'Dimmer PWM Multicanal';
UPDATE public.projects SET tags = ARRAY['Software', 'Cloud'] WHERE title = 'CRM Laboral: Engineering Solutions';
UPDATE public.projects SET tags = ARRAY['Documentación'] WHERE title = 'Instrumentation Manuals Pro';
UPDATE public.projects SET tags = ARRAY['Hardware', 'Firmware'] WHERE title = 'AgriNode Lite';