import os
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()

url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_PUBLIC_KEY")
supabase: Client = create_client(url, key)

def test_insert():
    print("--- Intentando insertar proyecto (Sincronización Bilingüe) ---")
    
    data = {
        "title": "Controlador Dimmer PWM (A5)",
        "status_badge": "SPIRAL",
        "card_icon": "fa-lightbulb",
        "icon_color": "#f1c40f",
        # Contenido Bilingüe
        "description_es": "Control de potencia para cargas AC mediante microcontrolador PIC.",
        "description_en": "High-efficiency AC power controller using a PIC microcontroller.",
        "location_es": "Bernardperulabs (En desarrollo 2026)",
        "location_en": "Bernardperulabs (In development 2026)",
        # Datos Técnicos
        "tech_stack": ["PIC/C", "KiCad 8.0", "FreeCAD", "Makefile"],
        "progress_percent": 100,
        "progress_color": "var(--prog-forest)",
        "repo_url": "https://github.com/MarcosBernardC/PIC12F675-LED-Dimmer",
        # Estructura JSONB
        "checklist": [
            {
                "text_es": "Investigación y Simulación Lógica", 
                "text_en": "Research and Logic Simulation", 
                "date": "Feb 26", 
                "done": True
            },
            {
                "text_es": "Layout 3D y Esquemático Base", 
                "text_en": "3D Layout and Base Schematic", 
                "date": "Feb 26", 
                "done": True
            }
        ]
    }
    
    try:
        response = supabase.table("projects").insert(data).execute()
        print("✅ ¡Éxito! Datos insertados correctamente:", response)
    except Exception as e:
        print("❌ Error detectado:")
        print(e)

if __name__ == "__main__":
    test_insert()